import { Link } from 'react-scroll';

const Navigation = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            offset={-70} // Adjust this based on the height of your header
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            to="portfolio" 
            smooth={true} 
            duration={500}
            offset={-70}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            offset={-70}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            to="resume" 
            smooth={true} 
            duration={500}
            offset={-70}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
