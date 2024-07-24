
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    { title: 'Brew Quest', description: 'Get access to local breweries wherever you are', image: 'path/to/image1.jpg' },
    { title: 'Beer Blog', description: 'Meet other beer entusiasts ', image: 'path/to/image2.jpg' },
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
