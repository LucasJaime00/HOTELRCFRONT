import React from 'react';

const Footer  = () => {
  return (
    <footer className="text-center bg-green text-light py-1">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Información</h4>
            <p>Hotel Serenity</p>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Teléfono: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="col-md-4">
            <h4>Redes Sociales</h4>
            <ul className="social-icons">
            <i class="bi bi-facebook fs-2"></i> <br />
            <i class="bi bi-instagram fs-2"></i><br />
            <i class="bi bi-twitter-x fs-2"></i>
            
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Horario de Atención</h4>
            <p>Lunes a Viernes: 9am - 6pm</p>
            <p>Sábados y Domingos: Cerrado</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; 2024 HOTELRC. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
