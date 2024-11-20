<template>
  <BreadCrumbs :name="project?.name ?? 'No name'" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import { useProjectsStore } from '../store/projects.store';
import type { Project } from '../interfaces/project.interface';
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';

interface Props {
  id: string;
}

const props = defineProps<Props>();

const projectsStore = useProjectsStore();

const project = ref<Project>();

watch(
  () => props.id,
  () => {
    project.value = projectsStore.projectsList.find((project) => project.id === props.id);
  },
  {
    immediate: true,
  },
);
</script>
