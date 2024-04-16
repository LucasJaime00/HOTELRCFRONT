import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearHabitacionAPI, modificarHabitacionAPI, obtenerHabitacionAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormularioHabitacion = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();
const {id} = useParams();
const navegacion = useNavigate();

  useEffect(()=>{
    if(editar){
      cargarDatosHabitacion();
    }
  },[])

  const cargarDatosHabitacion = async()=>{
    console.log(id)
    const respuesta = await obtenerHabitacionAPI(id)
    if(respuesta.status === 200){
      const habitacionBuscado = await respuesta.json();
      setValue('nombreHabitacion', habitacionBuscado.nombreHabitacion);
      setValue('precio', habitacionBuscado.precio);
      setValue('imagen', habitacionBuscado.imagen);
      setValue('categoria', habitacionBuscado.categoria);
      setValue('descripcion_breve', habitacionBuscado.descripcion_breve);
      setValue('descripcion_amplia', habitacionBuscado.descripcion_amplia);
    }
  }

  const onSubmit = async (habitacion) => {
    if (editar) {
      
      console.log('aqui tendria que editar');
      const respuesta = await modificarHabitacionAPI(habitacion, id);
      if(respuesta.status === 200){
        
        Swal.fire({
          title: "Habitacion modificada",
          text: `La habitacion "${habitacion.nombreHabitacion}" fue modificada correctamente`,
          icon: "success",
        });
        //redireccionar
        navegacion('/administrador');
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: `La habitacion "${habitacion.nombreHabitacion}" no pudo ser modificada. Intenta esta operación en unos minutos.`,
          icon: "error",
        });
      }
    } else {
      
      const respuesta = await crearHabitacionAPI(habitacion);
      
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Habitacion creada",
          text: `La habitacion "${habitacion.nombreHabitacion}" fue creada correctamente`,
          icon: "success",
        });
        
        reset();
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `La habitacion "${habitacion.nombreHabitacion}" no pudo ser creada. Intenta esta operación en unos minutos.`,
          icon: "error",
        });
      }
      console.log(respuesta);
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreHabitacion">
          <Form.Label>Habitacion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: suite"
            {...register("nombreHabitacion", {
              required: "El nombre de la habitacion es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 30,
                message: "Debe ingresar como maximo 30 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreHabitacion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: {
                value: 100,
                message: "Debe ingresar como minimo un monto de $100",
              },
              max: {
                value: 10000,
                message: "Debe ingresar como maximo el monto es de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatorio",
              pattern: {
                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                message:
                  "Debe ingresar una URL de imagen valida (png|jpg|jpeg|gif|png|svg)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="JUNIOR SUITE">JUNIOR SUITE</option>
            <option value="SENIOR SUITE">SENIOR SUITE</option>
            <option value="DELUXE SUITE">DELUXE SUITE</option>
            <option value="SUITE OLIMPO">SUITE OLIMPO</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: contamos con dos líneas telefónicas con buzón, reloj digital, caja de seguridad, plancha."
            as="textarea"
            {...register("descripcion_breve", {
              required: "La descripcion breve es obligatoria",
              minLength: {
                value: 10,
                message: "Debe ingresar como minimo 10 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej:contamos con dos líneas telefónicas con buzón, reloj digital, caja de seguridad, plancha, tabla de planchar, minibar y vestidor. Los servicios que incluye son los mismos que el Senior Suite y en algunos casos acceso a la sala de vinos."
            as="textarea"
            {...register("descripcion_amplia", {
              required: "La descripcion amplia es obligatoria",
              minLength: {
                value: 20,
                message: "Debe ingresar como minimo 20 caracteres",
              },
              maxLength: {
                value: 1000,
                message: "Debe ingresar como maximo 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioHabitacion;