import { NavLink } from 'react-router-dom';
import logo from '../../../assets/shared/desktop/logo-dark.png';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src={logo}
          alt="Designo website picture"
        />
      </NavLink>
      <nav className="header__navigation">
        <button className="header__hamburger"></button>
        <ul className="header__menu">
          <li>
            <NavLink className="header__link" to="/our-company">
              Our company
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/location">
              Location
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
