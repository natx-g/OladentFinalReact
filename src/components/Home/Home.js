import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";
import useHttp from "../../hooks/usehttp";
const BASE_URL = "https://react-http-b8415-default-rtdb.firebaseio.com/";
const Home = () => {
  const [user, setUser] = useState({
    first_Name: "",
    last_Name: "",
    email: "",
  });

  const { isLoading, error, request } = useHttp();

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");
      const url = `${BASE_URL}/users.json?orderBy="$key"&equalTo="${userId}"`;

      const data = await request({ url });
      console.log(url);
      setUser({
        first_Name: data[userId].first_name,
        last_Name: data[userId].last_name,
        email: data[userId].email,
      });
    };

    fetchUser();
  }, [request]);

  const loadingMessage = <h2>Cargando...</h2>;

  const errorMessage = <h2>{error}</h2>;

  return (
    <Card className={styles.home}>
      {isLoading && loadingMessage}
      {error && errorMessage}
      {!isLoading && !error && (
        <>
          <h1>¡Bienvenido!</h1>
          <h2>
            {user.first_Name} {user.last_Name}
          </h2>
        </>
      )}
    </Card>
  );
};

export default Home;
