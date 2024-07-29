
import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    image: 'path/to/project1.jpg', // Update with actual image path
    deployedLink: 'https://deployed-link-1.com',
    githubLink: 'https://github.com/username/project1',
  },
  {
    title: 'Project 2',
    image: 'path/to/project2.jpg', // Update with actual image path
    deployedLink: 'https://deployed-link-2.com',
    githubLink: 'https://github.com/username/project2',
  },
  {
    title: 'Project 3',
    image: 'path/to/project3.jpg', // Update with actual image path
    deployedLink: 'https://deployed-link-3.com',
    githubLink: 'https://github.com/username/project3',
  },
  {
    title: 'Project 4',
    image: 'path/to/project4.jpg', // Update with actual image path
    deployedLink: 'https://deployed-link-4.com',
    githubLink: 'https://github.com/username/project4',
  },
  {
    title: 'Project 5',
    image: 'path/to/project5.jpg', // Update with actual image path
    deployedLink: 'https://deployed-link-5.com',
    githubLink: 'https://github.com/username/project5',
  },
  {
    title: 'Project 6',
    image: 'path/to/project6.jpg', // Update with actual image path
    deployedLink: 'https://deployed-link-6.com',
    githubLink: 'https://github.com/username/project6',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
