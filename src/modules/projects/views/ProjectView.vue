<template>
  <div v-if="project" class="w-full">
    <section class="m-2">
      <BreadCrumbs :name="project.name" />
    </section>

    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completed</th>
              <th>Task</th>
              <th>Completed at</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in project.tasks" :key="task.id" class="hover">
              <th>
                <input
                  type="checkbox"
                  :checked="!!task.completedAt"
                  class="checkbox checkbox-primary"
                  @change="projectsStore.toggleTask(project.id, task.id)"
                />
              </th>
              <td>{{ task.name }}</td>
              <td>{{ task.completedAt }}</td>
            </tr>

            <tr>
              <th></th>
              <td>
                <input
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="New task"
                  v-model="newTask"
                  @keyup.enter="addTask"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import { useProjectsStore } from '../store/projects.store';
import type { Project } from '../interfaces/project.interface';
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';

interface Props {
  id: string;
}

const props = defineProps<Props>();

const router = useRouter();

const projectsStore = useProjectsStore();

const project = ref<Project>();
const newTask = ref<string>('');

watch(
  () => props.id,
  () => {
    project.value = projectsStore.projectsList.find((project) => project.id === props.id);
    if (!project.value) router.replace('/projects');
  },
  {
    immediate: true,
  },
);

const addTask = () => {
  if (!project.value) return;

  projectsStore.addTaskToProject(project.value.id, newTask.value);

  newTask.value = '';
};
</script>
