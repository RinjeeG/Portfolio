import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link 
            to="/" 
            className={currentPage === '/' ? 'link-active' : 'link'}
            aria-current={currentPage === '/' ? 'page' : undefined}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            to="/portfolio" 
            className={currentPage === '/portfolio' ? 'link-active' : 'link'}
            aria-current={currentPage === '/portfolio' ? 'page' : undefined}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={currentPage === '/contact' ? 'link-active' : 'link'}
            aria-current={currentPage === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            to="/resume" 
            className={currentPage === '/resume' ? 'link-active' : 'link'}
            aria-current={currentPage === '/resume' ? 'page' : undefined}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
