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

  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;

    const task = project.tasks.find((task) => task.id === taskId);
    if (!task) return;

    task.completedAt = task.completedAt ? null : new Date();
  };

  return {
    // properties
    projects,

    // getters
    projectsList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const total = project.tasks.length;
        const completed = project.tasks.filter((t) => t.completedAt).length;
        const completion = total === 0 ? 1 : (completed / total) * 100;

        return {
          id: project.id,
          name: project.name,
          taskCount: total,
          completion: completion,
        };
      });
    }),

    // actions
    addProject,
    addTaskToProject,
    toggleTask,
  };
});
