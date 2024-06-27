import Navigation from "./Navigation";
import styles from "./Header.module.css";
import logochico from "../../assets/logos/logochicoblanco.png"; 

function Header() {
  return (
    <header className={styles["main-header"]}>
      <img src={logochico} alt="Logo de Oladent"  />
      <Navigation />
    </header>
  );
}

export default Header;
