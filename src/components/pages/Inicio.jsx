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
          <h2 className="display-3">Nuestros habitaciones</h2>
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
      </Container>
    </>
  );
};

export default Inicio;