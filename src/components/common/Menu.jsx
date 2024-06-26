import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {

  const logout = ()=>{
  
    sessionStorage.removeItem('RChotel')
    
    setUsuarioLogueado("")
  }
  return ( 
    <Navbar expand="lg" className="text-center bg-green text-light py-3">
      <Container className="bg-fondo">
        <Navbar.Brand as={Link} to="/">
        <Link className="btn btn-black" to="/">
        <i className="bi bi-bootstrap-fill fs-2 "></i>
        </Link>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink end to="/registro" className="nav-link">
              Registro
            </NavLink>
            {
              
              usuarioLogueado.length > 0 ? (
                <>
                  <NavLink end to="/administrador" className="nav-link">
                    Administrador
                  </NavLink>
                  <Button onClick={logout}>Logout</Button>
                </>
              ) : (
                <NavLink end to="/login" className="nav-link">
                  Login
                </NavLink>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
