import icon from '../assets/icons/github.png';

const Project = ({ title, image, deployedLink, githubLink }) => {
    return (
      <div className="project-item">
        <div className="project-image" style={{ backgroundImage:`url(${image})` }}></div>
      <h3> <a href={deployedLink} target="_blank" rel="noopener noreferrer"> {title}</a></h3>
        <div className="links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt="github Icon" className='icon'/>
          </a>
        </div>
      </div>
    );
  };
  
  export default Project;