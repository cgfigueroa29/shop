import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">User <FontAwesomeIcon icon={faUser} /></a></li>
        <li><a href="#about">About Mentoring Store</a></li>
        <li><a href="#contact">Cart <FontAwesomeIcon icon={faCartShopping} /></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
