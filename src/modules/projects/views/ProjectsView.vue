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

    <custom-modal :open="customModalOpen">
      <template #header>
        <h1 class="text-3xl">Modal title</h1>
      </template>

      <template #body>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quae reiciendis
          architecto reprehenderit? Doloribus quam nulla vel expedita in omnis modi unde quo
          officiis provident, molestiae nesciunt suscipit repudiandae dolores.
        </p>
      </template>

      <template #actions>
        <div class="flex justify-end gap-4">
          <button @click="customModalOpen = false" class="btn">Close</button>

          <button @click="customModalOpen = false" class="btn btn-primary">Accept</button>
        </div>
      </template>
    </custom-modal>

    <fab-button @click="modalOpen = true">
      <AddCircle />
    </fab-button>

    <fab-button @click="customModalOpen = true" position="bottom-left">
      <ModalIcon />
    </fab-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import AddCircle from '@/modules/common/icons/AddCircle.vue';
import ModalIcon from '@/modules/common/icons/ModalIcon.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import CustomModal from '@/modules/common/components/CustomModal.vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);

const projectsStore = useProjectsStore();

const onClose = () => {
  modalOpen.value = false;
};

const onValue = (projectName: string) => {
  console.log({ projectName });
};
</script>
