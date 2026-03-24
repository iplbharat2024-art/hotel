import { FiPhone, FiMessageCircle } from 'react-icons/fi';

export default function StickyBottomBar() {
  return (
    <div className="sticky-bottom">
      <a href="tel:9694722722" className="sticky-btn call">
        <FiPhone className="sticky-icon" /> Call Now
      </a>
      <a
        href="https://wa.me/919694722722?text=Hi%2C%20I'm%20interested%20in%20property%20in%20Jaipur.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-btn whatsapp"
      >
        <FiMessageCircle className="sticky-icon" /> WhatsApp
      </a>
    </div>
  );
}
