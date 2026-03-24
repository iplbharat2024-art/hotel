import { Link } from 'react-router-dom';
import { FiPhone, FiMapPin, FiClock, FiMail } from 'react-icons/fi';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">R</div>
            <span className="footer-logo-text">Radheshyam Real Estate</span>
          </div>
          <p>
            जयपुर में आपके सपनों का घर — RERA Registered & JDA Approved Properties. Villas, Kothis, Plots & Apartments in prime Jaipur locations.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/properties">🏘️ Properties</Link></li>
            <li><Link to="/about">🏢 About Us</Link></li>
            <li><Link to="/home-loan">🏦 Home Loan</Link></li>
            <li><Link to="/videos">🎥 Videos</Link></li>
            <li><Link to="/contact">📞 Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Locations</h4>
          <ul className="footer-links">
            <li><Link to="/locations">📍 Vaishali Nagar</Link></li>
            <li><Link to="/locations">📍 Mansarovar</Link></li>
            <li><Link to="/locations">📍 Nirman Nagar</Link></li>
            <li><Link to="/locations">📍 Jagatpura</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="footer-contact-item">
            <FiPhone className="footer-contact-icon" />
            <div>
              <strong>9694-722-722</strong><br />
              76900-30225
            </div>
          </div>
          <div className="footer-contact-item">
            <FiMapPin className="footer-contact-icon" />
            <div>Gandhi Path W, Maa Hinglaj Nagar, Gulab Vihar B, Vaishali Nagar, Jaipur, Rajasthan 302021</div>
          </div>
          <div className="footer-contact-item">
            <FiClock className="footer-contact-icon" />
            <div>Mon-Sun: 9:30 AM – 7:30 PM</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <a href="https://youtube.com/channel/UCBf-dTIuR7HMWmnH7d9zWiA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://facebook.com/RadheshyamRealEstate" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/radheshyam_real_estate" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
        <p>RERA Registration: RAJ/A/2022/4768</p>
        <p>© 2025 Radheshyam Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
}
