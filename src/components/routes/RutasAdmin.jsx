import { Route, Routes } from "react-router";
import Administrador from "../pages/Administrador";
import FormularioHabitacion from "../pages/habitacion/FormularioHabitacion";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear"
          element={
            <FormularioHabitacion
              editar={false}
              titulo="Nueva habitacion"
            ></FormularioHabitacion>
          }
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={
            <FormularioHabitacion
              editar={true}
              titulo="Editar habitacion"
            ></FormularioHabitacion>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;