import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', image: 'path/to/image1.jpg' },
    { title: 'Project 2', description: 'Description of project 2', image: 'path/to/image2.jpg' },
    // Add more projects as needed
  ];

  return (
    <main>
      <h1>My Portfolio</h1>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </main>
  );
};

export default Portfolio;
