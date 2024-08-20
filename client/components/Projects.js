import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    { id: 1, name: 'Project 1', description: 'Description 1' },
    { id: 2, name: 'Project 2', description: 'Description 2' },
    { id: 3, name: 'Project 3', description: 'Description 3' },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;