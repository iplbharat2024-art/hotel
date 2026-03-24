import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { properties, propertyTypes } from '../data/properties';

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <>
      <div className="page-banner">
        <h1>Properties</h1>
        <p>जयपुर की बेहतरीन Villas, Kothis, Plots & Apartments</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / Properties
        </div>
      </div>

      <section className="section bg-cream">
        <div className="container">
          <div className="filter-tabs">
            {propertyTypes.map(type => (
              <button
                key={type.key}
                className={`filter-tab ${activeFilter === type.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(type.key)}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="properties-grid">
            {properties.map((prop, i) => (
              <PropertyCard key={prop.id} property={prop} index={i} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', padding: '30px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>और Properties देखना चाहते हैं?</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>WhatsApp पर अपनी requirement बताएं — हम आपको best options भेजेंगे</p>
            <a
              href="https://wa.me/919694722722?text=Hi%2C%20I%20want%20to%20see%20more%20properties%20in%20Jaipur.%20Please%20share%20available%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ display: 'inline-flex' }}
            >
              💬 WhatsApp पर और Options पाएं
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
