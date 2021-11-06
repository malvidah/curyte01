const MODULES = [

    {
    id: 'e2',
    title: 'Biology 2',
    role: 'by Marvin Liyanage',
    description:
      "The Study Of Living Things",
    content:
      "content content content content content content content content content content content content content content content",
    date: 'Published August 2021',
    image: 'images/biology.jpeg',
    tags: 'intermediate',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Chemistry 2',
    role: 'by Marvin Liyanage',
    description:
      "The study of matter, its properties, and its interactions.",
    content:
      "content content content content content content content content content content content content content content content",
    date: 'Published August 2021',
    image: 'images/chemistry.jpeg',
    tags: 'intermediate',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'Physics 2',
    role: 'by Marvin Liyanage',
    description:
      "The study of the natural laws of the universe.",
    content:
      "content content content content content content content content content content content content content content content",
    date: 'Published August 2021',
    image: 'images/physics.jpeg',
    tags: 'physics',
    isFeatured: true,
  },
];

export function getFeaturedModules() {
  return MODULES.filter((modules) => modules.isFeatured);
}

export function getAllModules() {
  return MODULES;
}

export function getFilteredModules(dateFilter) {
  const { year, month } = dateFilter;

  let filteredModules = MODULES.filter((card) => {
    const moduleDate = new Date(project.date);
    return moduleDate.getFullYear() === year && moduleDate.getMonth() === month - 1;
  });

  return filteredProjects;
}

export function getModuleById(id) {
  return MODULES.find((module) => module.id === id);
}