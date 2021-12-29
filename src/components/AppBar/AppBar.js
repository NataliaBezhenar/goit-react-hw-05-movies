import Navigation from "../Navigation/Navigation";
import styles from "./Appbar.module.css";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
