import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={(navData) =>
          navData.isActive ? styles.activeLink : styles.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={(navData) =>
          navData.isActive ? styles.activeLink : styles.link
        }
      >
        Movies
      </NavLink>
    </nav>
  );
}
