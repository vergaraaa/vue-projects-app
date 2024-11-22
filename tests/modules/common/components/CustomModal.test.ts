import { mount } from '@vue/test-utils';
import CustomModal from '@/modules/common/components/CustomModal.vue';

describe('<CustomModal />', () => {
  test('renders dialog with default state', () => {
    const wrapper = mount(CustomModal);

    const modal = wrapper.find('.modal');
    expect(modal.attributes('open')).toBeUndefined();
  });

  test('renders dialog with header, body and actions slots', () => {
    const wrapper = mount(CustomModal, {
      slots: {
        header: '<span>Header content</span>',
        body: '<span>Body content</span>',
        actions: '<span>Actions content</span>',
      },
    });

    expect(wrapper.text()).toContain('Header content');
    expect(wrapper.find('.my-5').text()).toContain('Body content');
    expect(wrapper.text()).toContain('Actions content');
  });

  test('opens and closes dialog when open prop changes', async () => {
    const wrapper = mount(CustomModal, {
      props: {
        open: true,
      },
    });

    const modal = wrapper.find('.modal');
    expect(modal.attributes('open')).toBeDefined();

    const modalBackground = wrapper.find('.modal-backdrop');
    expect(modalBackground.exists()).toBe(true);
    expect(modalBackground.classes()).toEqual([
      'modal-backdrop',
      'fixed',
      'top-0',
      'left-0',
      'z-10',
      'bg-black/40',
      'w-screen',
      'h-screen',
    ]);

    // change prop value
    await wrapper.setProps({ open: false });

    expect(modal.attributes('open')).toBeUndefined();
    expect(wrapper.find('.modal-backdrop').exists()).toBe(false);
  });
});
