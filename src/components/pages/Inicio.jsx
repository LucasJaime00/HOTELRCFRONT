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
<article>

 <div className="room-service-description">
  <h2>Servicio a la Habitación: Experiencia Gastronómica en la Comodidad de tu Habitación</h2>
  <p>Disfruta de una experiencia gastronómica excepcional sin salir de la comodidad y privacidad de tu habitación con nuestro servicio a la habitación. En Hotel Serenity, nos esforzamos por brindar a nuestros huéspedes una experiencia de lujo y conveniencia, y nuestro servicio a la habitación es una extensión de ese compromiso.</p>
  <h3>¿Qué Ofrecemos?</h3>
  <ul>
    <li><strong>Variedad de Platos:</strong> Nuestro extenso menú ofrece una amplia variedad de platos cuidadosamente seleccionados, desde opciones saludables y ligeras hasta platos gourmet y indulgentes, para satisfacer todos los gustos y preferencias.</li>
    <li><strong>Desayuno a la Carta:</strong> Comienza tu día de la mejor manera posible con un desayuno a la carta en tu habitación. Desde opciones tradicionales como huevos revueltos y tocino hasta platos más ligeros como frutas frescas y yogur, tenemos todo lo que necesitas para un comienzo perfecto.</li>
    <li><strong>Comidas y Cenas:</strong> Ya sea que desees disfrutar de un almuerzo relajado o una cena íntima, nuestro servicio a la habitación está disponible para satisfacer tus antojos en cualquier momento del día. Desde platos clásicos de la cocina local hasta creaciones gourmet de nuestro chef ejecutivo, cada comida es una experiencia culinaria única.</li>
    <li><strong>Snacks y Bebidas:</strong> ¿Antojo de algo entre comidas? Nuestro menú de snacks y bebidas ofrece una selección de opciones deliciosas, desde bocadillos ligeros hasta postres decadentes, junto con una variedad de bebidas refrescantes, vinos y licores.</li>
  </ul>
  <h3>¿Cómo Funciona?</h3>
  <ol>
    <li><strong>Realiza tu Pedido:</strong> Simplemente llama a nuestro servicio de habitaciones desde tu habitación y realiza tu pedido. Nuestro amable personal estará encantado de ayudarte a elegir los platos perfectos para satisfacer tus deseos culinarios.</li>
    <li><strong>Entrega a Tiempo:</strong> Una vez que hayas realizado tu pedido, nuestro equipo se encargará de preparar tus platos con la más alta calidad y atención al detalle. Tu comida será entregada directamente a la puerta de tu habitación en el momento que elijas.</li>
    <li><strong>Disfruta en Privacidad:</strong> Relájate y disfruta de tu deliciosa comida en la privacidad de tu habitación. Ya sea que prefieras cenar en la elegante mesa de tu habitación o acurrucarte en la cama con una cena informal, elige el ambiente que más te convenga y deja que nosotros nos encarguemos del resto.</li>
  </ol>
  <p>En Hotel Serenity, nuestro objetivo es superar tus expectativas y hacer que cada momento de tu estancia sea inolvidable. Con nuestro servicio a la habitación, te invitamos a deleitarte con una experiencia gastronómica excepcional mientras disfrutas de la máxima comodidad y conveniencia en tu hogar lejos del hogar.</p>
</div>

<img
       
        src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fondo de hotel"
      />
</article>
        </section>
      </Container>
      
    </>
  );
};

export default Inicio;