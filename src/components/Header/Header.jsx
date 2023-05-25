import { Outlet,NavLink } from "react-router-dom";
import style from './style.module.css'
const Headers = () => {
  return (
    <div>
      <header className={style.header}>
        <nav>
          <NavLink className={style.link} to="/" end>Home</NavLink>
          <NavLink className={style.link} to="/movies">About</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default Headers;