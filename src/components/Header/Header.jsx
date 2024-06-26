import Navigation from "./Navigation";
import styles from "./Header.module.css";





function Header() {
  return (
    <header className={styles["main-header"]}>
      <h2>Oladent</h2>
    
      <Navigation />
    </header>
  );
}

export default Header;
