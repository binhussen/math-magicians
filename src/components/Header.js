import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="title">Math Magicians</h1>
    <nav>
      <ul className="navbar">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="nav-item">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
