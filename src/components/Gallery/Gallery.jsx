import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import Card from "../UI/Card/Card";
import styles from "./Gallery.module.css";
import GalleryPicture from "./GalleryPicture";
import Button from "../UI/Button/Button";

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pictureIds = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

  return (
    <div className={styles.container}>
      <Card className={styles.gallery}>
        <h1>Sucursal</h1>
        <ul>
          {pictureIds.map(({ id }) => (
            <li key={id}>
              <Link to={`${id}`}>Sucursal {id}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className={styles.actions}>
          <Button onClick={() => setSearchParams({ grayscale: true })}>
            B/N
          </Button>
          <Button onClick={() => setSearchParams({ grayscale: false })}>
            Color
          </Button>
        </div>
      </Card>
      <Routes>
        <Route
          path=":imageId"
          element={<GalleryPicture />}
        />
      </Routes>
    </div>
  );
};

export default Gallery;
