import { FiMapPin, FiMaximize, FiHome } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function PropertyCard({ property, index }) {
  const whatsappText = encodeURIComponent(
    `Hi, I'm interested in ${property.title} (${property.config}, ${property.size}) at ${property.location} — ${property.price}. Please share more details.`
  );

  return (
    <div className="property-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="property-card-image">
        <img src={property.image} alt={`${property.title} - ${property.location}`} loading="lazy" />
        <span className={`property-badge ${property.badge}`}>{property.status}</span>
      </div>
      <div className="property-card-body">
        <h3 className="property-card-title">{property.title}</h3>
        <div className="property-card-location">
          <FiMapPin size={14} /> {property.location}
        </div>
        <div className="property-card-specs">
          <span className="property-spec">
            <FiHome size={14} className="spec-icon" /> {property.config}
          </span>
          <span className="property-spec">
            <FiMaximize size={14} className="spec-icon" /> {property.size}
          </span>
        </div>
        <div className="property-card-footer">
          <span className="property-price">{property.price}</span>
          <a
            href={`https://wa.me/919694722722?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-enquire"
          >
            <FaWhatsapp /> Details पाएं
          </a>
        </div>
      </div>
    </div>
  );
}
