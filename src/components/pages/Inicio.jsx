import { Container, Row } from "react-bootstrap";
import CardHabitacion from "./habitacion/CardHabitacion";
import { useEffect, useState } from "react";
import { leerHabitacionesAPI } from "../../helpers/queries";

const Inicio = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    obtenerHabitaciones();
  }, []);

  const obtenerHabitaciones = async () => {
    const respuesta = await leerHabitacionesAPI();
    if (respuesta.status === 200) {
      
      const datos = await respuesta.json();
      setHabitaciones(datos);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta esta operación en unos minutos.`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <img
        className="banner"
        src="https://images.pexels.com/photos/14387344/pexels-photo-14387344.jpeg"
        alt="fondo de hotel"
      />
      <Container className="mainContainer my-4">
        <section>
          <h2 className="display-3">Nuestras habitaciones</h2>
          <hr />
          <Row>
            {habitaciones.map((habitacion) => (
              <CardHabitacion
              habitacion={habitacion}
                key={habitacion._id}
              ></CardHabitacion>
            ))}
          </Row>
        </section>
        <section>
            <article><h1 className="text-center">BIENVENIDOS A HOTELRC </h1>
                <h3 className="text-center">Hotel de lujo y centro de convenciones en Tucuman</h3>
                <p>Con la mejor ubicación en el centro de la ciudad para viajes de negocios y placer, HOTELRC es uno de los principales hoteles de conferencias de 5 estrellas de Tucuman . Nuestra ubicación en el corazón del exclusivo distrito financiero y residencial. Quédese con nosotros y encuentre una amplia gama de atracciones turísticas, tiendas, restaurantes, destinos de vida nocturna y ruinas históricas. Además, nuestro hotel de lujo está cerca del centro financiero y ofrece una comodidad incomparable a las principales corporaciones y oficinas gubernamentales.</p>
</article>
        </section>
      </Container>
    </>
  );
};

export default Inicio;