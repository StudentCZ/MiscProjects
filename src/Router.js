import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './Router.module.css';
import App from './App';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
        </Routes>
      </BrowserRouter>

      <nav className={style.navBar}>
        <ul className={style.li}>
          <li>HomePage</li>
        </ul>
      </nav>
    </>
  );
};

export default Router;
