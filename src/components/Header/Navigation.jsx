import { useContext } from "react";
import styles from "./Navigation.module.css";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Navigation = () => {
  const { isLoggedIn, onLogout } = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Bienvenido</Link>
        </li>
        <li>
          <Link to="/gallery">Publicidad</Link>
        </li>
        <li>
          <Link to="/home">Clasificaciones</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Button
              color="secondary"
              onClick={onLogout}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">Acceso</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
