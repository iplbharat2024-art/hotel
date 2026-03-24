import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const locations = [
  {
    name: 'Vaishali Nagar',
    emoji: '🏘️',
    desc: 'जयपुर का सबसे sought-after residential area। Wide roads, markets, hospitals, schools — सब कुछ पास। हमारे पास यहाँ Villas, Kothis और Plots उपलब्ध हैं।',
    highlights: ['Wide Roads', 'Hospitals Nearby', 'Schools', 'Shopping Markets', 'Metro Access']
  },
  {
    name: 'Mansarovar',
    emoji: '🌇',
    desc: 'जयपुर का सबसे established और well-connected इलाका। Metro connectivity, shopping complexes, और peaceful living — families के लिए ideal choice।',
    highlights: ['Metro Station', 'Well-Connected', 'Shopping Complexes', 'Parks & Gardens', 'Established Area']
  },
  {
    name: 'Nirman Nagar',
    emoji: '🏙️',
    desc: 'Central Jaipur location — शहर के बीचोबीच। Commercial hubs के पास, excellent connectivity। Premium villas और kothis available।',
    highlights: ['Central Location', 'Commercial Hubs', 'Excellent Transport', 'Premium Properties', 'City Center']
  },
  {
    name: 'Jagatpura',
    emoji: '🌱',
    desc: 'Jaipur का fast-growing area — affordable rates पर premium living। IT hubs, Sitapura Industrial Area के करीब। Young professionals और investors के लिए best option।',
    highlights: ['Fast Growing', 'Affordable Rates', 'Near IT Hubs', 'Investment Hotspot', 'New Development']
  }
];

export default function Locations() {
  return (
    <>
      <div className="page-banner">
        <h1>Locations We Serve</h1>
        <p>जयपुर के Premium Locations में Property — आपकी पसंद, हमारी सेवा</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / Locations
        </div>
      </div>

      <section className="section bg-cream">
        <div className="container">
          <div className="locations-grid">
            {locations.map((loc, i) => (
              <div className="location-card" key={i}>
                <h3>{loc.emoji} {loc.name}</h3>
                <p>{loc.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                  {loc.highlights.map((h, j) => (
                    <span key={j} style={{
                      padding: '4px 12px',
                      background: 'rgba(184,92,56,0.08)',
                      color: 'var(--terracotta)',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {h}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/919694722722?text=Hi%2C%20I%20want%20property%20in%20${encodeURIComponent(loc.name)}.%20Please%20share%20available%20options.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-cta"
                >
                  {loc.name} में Properties देखें <FiArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
