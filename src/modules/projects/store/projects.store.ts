import { v4 as uuid } from 'uuid';
import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import type { Project } from '../interfaces/project.interface';
import { useLocalStorage } from '@vueuse/core';

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: string) => {
    if (name.length === 0) return;

    projects.value.push({
      id: uuid(),
      name: name,
      tasks: [],
    });
  };

  const addTaskToProject = (projectId: string, taskName: string) => {
    if (taskName.trim().length === 0) return;

    const project = projects.value.find((p) => p.id === projectId);

    if (!project) return;

    project.tasks.push({
      id: uuid(),
      name: taskName,
      completedAt: null,
    });
  };

  return {
    // properties
    projects,

    // getters
    projectsList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    // actions
    addProject,
    addTaskToProject,
  };
});
