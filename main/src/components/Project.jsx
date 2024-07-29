const Project = ({ title, image, deployedLink, githubLink }) => {
    return (
      <div className="project-item">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <div className="links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    );
  };
  
  export default Project;