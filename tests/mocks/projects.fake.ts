import type { Project } from '@/modules/projects/interfaces/project.interface';

export const fakeProjects: Project[] = [
  {
    id: '1',
    name: 'Project 1',
    tasks: [
      { id: '1', name: 'Task 1', completedAt: new Date() },
      { id: '2', name: 'Task 2', completedAt: null },
      { id: '3', name: 'Task 3', completedAt: null },
      { id: '4', name: 'Task 4', completedAt: null },
    ],
  },
  {
    id: '2',
    name: 'Project 2',
    tasks: [],
  },
  {
    id: '3',
    name: 'Project 3',
    tasks: [
      { id: '1', name: 'Task 1', completedAt: null },
      { id: '2', name: 'Task 2', completedAt: new Date() },
    ],
  },
  {
    id: '4',
    name: 'Project 4',
    tasks: [
      { id: '1', name: 'Task 1', completedAt: null },
      { id: '2', name: 'Task 2', completedAt: new Date() },
      { id: '1', name: 'Task 3', completedAt: null },
    ],
  },
];
