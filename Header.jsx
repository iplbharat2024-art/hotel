import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPhone, FiHome, FiGrid, FiInfo, FiMapPin, FiDollarSign, FiVideo, FiStar, FiMail, FiFileText, FiArrowRight, FiX } from 'react-icons/fi';

const navLinks = [
  { to: '/', label: 'Home', icon: <FiHome /> },
  { to: '/properties', label: 'Properties', icon: <FiGrid /> },
  { to: '/about', label: 'About Us', icon: <FiInfo /> },
  { to: '/locations', label: 'Locations', icon: <FiMapPin /> },
  { to: '/home-loan', label: 'Home Loan', icon: <FiDollarSign /> },
  { to: '/videos', label: 'Videos', icon: <FiVideo /> },
  { to: '/testimonials', label: 'Testimonials', icon: <FiStar /> },
  { to: '/contact', label: 'Contact', icon: <FiMail /> },
  { to: '/blog', label: 'Blog', icon: <FiFileText /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="logo">
            <div className="logo-icon">R</div>
            <div className="logo-text">
              <span>Radheshyam</span>
              <span>Real Estate</span>
            </div>
          </Link>
          <div className="header-actions">
            <a href="tel:9694722722" className="header-cta">
              <FiPhone /> Explore Properties
            </a>
            <button
              className={`hamburger ${isOpen ? 'open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
      
      <nav className={`nav-sidebar ${isOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
            <span className="nav-icon">{link.icon}</span>
            {link.label}
          </Link>
        ))}
        <div className="nav-contact">
          <p>Property Enquiry? Call us:</p>
          <a href="tel:9694722722" className="nav-phone">
            <FiPhone /> 9694-722-722
          </a>
        </div>
      </nav>
    </>
  );
}
