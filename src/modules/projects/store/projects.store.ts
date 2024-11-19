import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Project } from '../interfaces/project.interface';

const initialLoad = (): Project[] => {
  return [
    {
      id: '1',
      name: 'Project 1',
      tasks: [],
    },
    {
      id: '2',
      name: 'Project 2',
      tasks: [],
    },
  ];
};

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>(initialLoad());

  return { projects };
});
