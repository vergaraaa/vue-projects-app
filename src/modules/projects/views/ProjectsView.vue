<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Project</th>
          <th>Tasks</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>

    <input-modal
      :open="modalOpen"
      title="New project"
      subtitle="Give a unique name to your project"
      @close="onClose"
      @value="onValue"
    />

    <fab-button @click="modalOpen = true">
      <add-circle />
    </fab-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import AddCircle from '@/modules/common/icons/AddCircle.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';

const modalOpen = ref(false);

const onClose = () => {
  modalOpen.value = false;
};

const onValue = (projectName: string) => {
  console.log({ projectName });
};
</script>
