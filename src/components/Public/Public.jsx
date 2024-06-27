import Card from "../UI/Card/Card";
import styles from "./Public.module.css";
import publicidad from "../../assets/publicidad/6.png";
import ECTReactComponent from "../cie11/ECTReactComponent.tsx"
const Public = () => {
  return (
    <Card className={`${styles.public} bg-white rounded-lg shadow-md p-6`}>
      <h1 className="text-3xl font-semibold mb-4">Bienvenido a Oladent</h1>
      <p className="text-gray-600 mb-6">
        La sonrisa es uno de los factores estéticos más importantes de una persona. Una sonrisa saludable ofrece una imagen positiva y estimula a la persona a sonreír con tranquilidad y naturalidad. Una sonrisa sana y armónica da seguridad en uno mismo y evita enfermedades.
        Es muy importante que te preocupes por mantener una buena higiene bucal y acudir al dentista dos veces al año.
        No hay mejor tratamiento preventivo que el conocimiento. Si conocemos el origen de las enfermedades bucales, podemos prevenirlas.
        Contamos con los más altos estándares de calidad, ofreciéndote beneficios como:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Planes dentales hechos a medida</li>
        <li>Horarios que se adaptan a tu estilo de vida</li>
        <li>Precios accesibles con materiales de la más alta calidad</li>
      </ul>
      <p className="text-gray-600">
        En Oladent, nuestros tratamientos son una inversión para tu salud, obteniendo grandes beneficios.
      </p>
      <img src={publicidad} alt="Consultorio dental" className="mt-6 rounded-lg" />
      <ECTReactComponent />
    </Card>
  );
};

export default Public;
