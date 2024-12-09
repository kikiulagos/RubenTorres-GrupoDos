import './Footer.css'

    const Footer = () => {
        return (
          <footer className="footer">
            <div className="footer-content">
              <p>&copy; 2024 LP</p>
              <div className='logofooter'>
              <img src="/logo.png" alt="Logo" />
              </div>
              <ul className="footer-links">
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#services">Seguridad de la Empresa</a></li>
                <li><a href="#contact">Mas informacion</a></li>
              </ul>
              <div className="footer-section">
            <h3>Contacto</h3>
            <p>Email: contactolp@gmail.com</p>
            <p>Teléfono: +56 9 1122 3344</p>
          </div>
          <div className="footer-section">
            <h3>Métodos de Pago</h3>
            <p>Aceptamos las siguientes formas de pago:</p>
            <div className="payment-methods">
              <img src="../../../Public/visa.png" alt="Visa" className="payment-icon" />
              <img src="../../../Public/card.png" alt="MasterCard" className="payment-icon" />
              <img src="../../../Public/paypal.png" alt="PayPal" className="payment-icon" />
              <img src="../../../Public/apple-pay.png" alt="Apple Pay" className="payment-icon" />
            </div>
          </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">X</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">Instagram</a>
        </div>
        </div>
          </footer>
        );
      };
export default Footer;