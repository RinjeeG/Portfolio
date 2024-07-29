
import { Link, useLocation } from 'react-router-dom';


const Navigation = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul>
        <li><Link to="/" className={currentPage === '/' ? 'link-active' : 'link'}>About Me</Link></li>
        <li><Link to="/portfolio"className={currentPage === '/portfolio' ? 'link-active' : 'nav-link'}>Portfolio</Link></li>
        <li><Link to="/contact"className={currentPage === '/contact' ? 'link-active' : 'nav-link'}>Contact</Link></li>
        <li><Link to="/resume" className={currentPage === '/resume' ? 'link-active' : 'nav-link'}>Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
