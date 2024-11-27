/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Mock } from 'vitest';
import { useRouter } from 'vue-router';
import { mount } from '@vue/test-utils';
import { fakeProjects } from '../../../mocks/projects.fake';
import ProjectView from '@/modules/projects/views/ProjectView.vue';
import { useProjectsStore } from '@/modules/projects/store/projects.store';

vi.mock('vue-router');
vi.mock('@/modules/projects/store/projects.store');

describe('<ProjectView />', () => {
  test('should be rendered with a project', () => {
    (useProjectsStore as any).mockReturnValue({
      projectsList: fakeProjects,
    });

    const wrapper = mount(ProjectView, {
      props: {
        id: '1',
      },
      global: {
        stubs: ['RouterLink'],
      },
    });

    const tableRows = wrapper.findAll('tr.hover');
    expect(tableRows.length).toBe(fakeProjects.at(0)?.tasks.length);
  });

  test('should redirect to projects if projectId not found', () => {
    (useProjectsStore as any).mockReturnValue({
      projectsList: [],
    });

    const replaceSpy = vi.fn();
    (useRouter as Mock).mockReturnValue({
      replace: replaceSpy,
    });

    mount(ProjectView, {
      props: {
        id: '1',
      },
      global: {
        stubs: ['RouterLink'],
      },
    });

    expect(replaceSpy).toHaveBeenCalledWith('/projects');
  });
});
