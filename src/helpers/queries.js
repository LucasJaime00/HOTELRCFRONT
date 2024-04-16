const URI_Habitacion = import.meta.env.VITE_API_HABITACION;




 export const crearHabitacionAPI = async (habitacionNuevo) => {
   try {
    const respuesta = await fetch(URI_Habitacion, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify(habitacionNuevo),
    });
     return respuesta;
  } catch (error) {
    console.log(error);
  }
};

  
 



 export const leerHabitacionesAPI = async () => {
   try {
     const respuesta = await fetch(URI_Habitacion);
     console.log("Mensaje personalizados", respuesta); // 
     return respuesta;
   } catch (error) {
     console.log(error);
   }
 };


export const borrarHabitacionAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Habitacion}/${id}`, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};



export const obtenerHabitacionAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Habitacion}/${id}`);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};


export const modificarHabitacionAPI = async (habitacion, id) => {
  try {
    const respuesta = await fetch(`${URI_Habitacion}/${id}`,{
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(habitacion)
    })
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const userAdmin={
  email: "admin@rchotel.com",
  password: "123ABCabc"
}

export const iniciarSesion = (usuario)=>{
 if(usuario.email === userAdmin.email && usuario.password === userAdmin.password){
  //loguear al usuario
  sessionStorage.setItem('RChotel', JSON.stringify(userAdmin.email));
  return true;
 }else{
  return false;
 }
}