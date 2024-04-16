import { Container, Card, Row, Col } from "react-bootstrap";
import { obtenerHabitacionAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleHabitacion = () => {
  const [habitacion, setHabitacion] = useState({})
  const {id} = useParams();
  useEffect(()=>{
      cargarDatosHabitacion();
  },[])

  const cargarDatosHabitacion = async()=>{
 
    const respuesta = await obtenerHabitacionAPI(id)
    if(respuesta.status === 200){
      setHabitacion(await respuesta.json());
    }
  }
  return (
    <Container className="my-3 mainContainer">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={habitacion.imagen}
              alt={habitacion.nombreHabitacion}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{habitacion.nombreHabitacion}</Card.Title>
              <hr />
              <Card.Text>
              {habitacion.descripcion_amplia}
              <br/>
              <br/>
              <span className="primary-font fw-semibold ">Categoria:</span> {habitacion.categoria}
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">Precio: ${habitacion.precio}</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleHabitacion;