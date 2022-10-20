import { BrowserRouter } from 'react-router-dom';
import style from './Router.module.css';

const Router = () => {
  return (
    <>
      <nav className={style.navBar}>
        <ul className={style.li}>
          <li>HomePage</li>
        </ul>
      </nav>
    </>
  );
};

export default Router;
