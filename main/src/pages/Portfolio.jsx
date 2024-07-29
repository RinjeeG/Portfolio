import Project from '../components/Project';
import placeholderImage from '../assets/icons/coming-soon.png';
import projectIcon from '../assets/icons/brew.png';
import breweryTracker from '../assets/images/breweryTracker.png';
const projects = [
  {
    title: 'Brewery Tracker',
    image: breweryTracker, // Update with actual image path
    deployedLink: 'https://deployed-link-1.com',
    githubLink: 'https://github.com/djinjones/Brewery-Tracker.git',
  },
  {
    title: 'Brew Quest',
    image: projectIcon, // Update with actual image path
    deployedLink: 'https://djinjones.github.io/Brewery-Tracker/',
    githubLink: 'https://github.com/djinjones/BrewQuest.git',
  },
  {
    title: 'Project 3',
    image: placeholderImage, // Update with actual image path
    deployedLink: 'https://deployed-link-3.com',
    githubLink: 'https://github.com/username/project3',
  },
  {
    title: 'Project 4',
    image: placeholderImage, // Update with actual image path
    deployedLink: 'https://deployed-link-4.com',
    githubLink: 'https://github.com/username/project4',
  },
  {
    title: 'Project 5',
    image: placeholderImage, // Update with actual image path
    deployedLink: 'https://deployed-link-5.com',
    githubLink: 'https://github.com/username/project5',
  },
  {
    title: 'Project 6',
    image: placeholderImage, // Update with actual image path
    deployedLink: 'https://deployed-link-6.com',
    githubLink: 'https://github.com/username/project6',
  },
];

const Portfolio = () => {
  return (
    <main>
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
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
    </main>
  );
};

export default Portfolio;
