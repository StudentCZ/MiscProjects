import style from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className={style.navBar}>
        <ul className={style.li}>
          <Link to='/'>
            <li>HomePage</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
