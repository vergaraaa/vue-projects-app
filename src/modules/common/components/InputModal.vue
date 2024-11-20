<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p v-if="subtitle" class="py-4">{{ subtitle }}</p>

      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            v-model="inputValue"
            :placeholder="placeholder ?? 'Project name'"
            class="input input-bordered input-primary w-full flex-1"
          />

          <div class="flex justify-end mt-5 gap-4">
            <button type="button" class="btn" @click="onClose">Close</button>

            <button class="btn btn-primary">Accept</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black/40 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

interface Props {
  open: boolean;
  title: string;
  subtitle?: string;
  placeholder?: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

watch(props, ({ open }) => {
  if (open) inputRef.value?.focus();
});

const onClose = () => {
  inputValue.value = '';
  emit('close');
};

const submitValue = () => {
  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }

  emit('value', inputValue.value.trim());
  emit('close');

  inputValue.value = '';
};
</script>
