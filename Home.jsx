import { FiPhone, FiMessageCircle, FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import TestimonialCard from '../components/TestimonialCard';
import LeadForm from '../components/LeadForm';
import StatsCounter from '../components/StatsCounter';
import { properties } from '../data/properties';
import { testimonials } from '../data/testimonials';

const services = [
  { icon: '🏠', title: 'Villas & Kothis', desc: 'जयपुर के प्रीमियम लोकेशन्स में 111 Gaj से 400 Gaj तक शानदार Villas और Kothis। Modern architecture, fully furnished options।' },
  { icon: '📐', title: 'JDA Approved Plots', desc: 'सुरक्षित निवेश के लिए JDA Approved residential plots। Clear title, proper documentation, और future appreciation guarantee।' },
  { icon: '🏢', title: 'Apartments & Flats', desc: '1 BHK, 2 BHK, 3 BHK और 4 BHK apartments — हर बजट के लिए। Modern amenities और bank loan facility के साथ।' },
  { icon: '🏗️', title: 'Duplex Houses', desc: 'Contemporary architecture और spacious design वाले Duplex homes। दो floors पर luxury living।' },
  { icon: '🏦', title: 'Home Loan Assistance', desc: 'SBI, HDFC, LIC Housing, PNB Housing, IIFL — Documentation से लेकर approval तक हम हर step में साथ हैं।' },
  { icon: '💡', title: 'Property Consultation', desc: 'कौन सी लोकेशन बेस्ट है? कितना बजट सही रहेगा? — Free consultation call करें।' }
];

const whyChoose = [
  { title: 'RERA Registered', desc: 'आपका निवेश 100% सुरक्षित — सरकारी रजिस्ट्रेशन नंबर: RAJ/A/2022/4768' },
  { title: 'JDA Approved Properties', desc: 'कोई कानूनी झंझट नहीं — सभी प्रॉपर्टीज JDA से मान्यता प्राप्त' },
  { title: '6+ Bank Loan Partners', desc: 'SBI, HDFC, LIC, PNB Housing — लोन approval में कोई दिक्कत नहीं' },
  { title: 'Ready to Move', desc: 'बुक करो और शिफ्ट हो जाओ — कोई इंतज़ार नहीं' },
  { title: '7 Days Available', desc: 'सोमवार से रविवार, सुबह 9:30 से शाम 7:30 — हम हमेशा available हैं' },
  { title: 'Video Property Tours', desc: 'YouTube पर 200+ प्रॉपर्टी videos — घर बैठे देखो, पसंद आए तो आओ' }
];

const locations = [
  { name: 'Vaishali Nagar', emoji: '🏘️', desc: 'जयपुर का सबसे sought-after residential area। Wide roads, markets, hospitals, schools — सब कुछ पास।' },
  { name: 'Mansarovar', emoji: '🌇', desc: 'जयपुर का सबसे established और well-connected इलाका। Metro connectivity, shopping complexes।' },
  { name: 'Nirman Nagar', emoji: '🏙️', desc: 'Central Jaipur location — शहर के बीचोबीच। Commercial hubs के पास, excellent connectivity।' },
  { name: 'Jagatpura', emoji: '🌱', desc: 'Jaipur का fast-growing area — affordable rates पर premium living। IT hubs के करीब।' }
];

const banks = ['SBI Home Loans', 'HDFC Home Loans', 'LIC Housing', 'PNB Housing', 'IIFL Home Loans', 'DHFL'];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            RERA REGISTERED • JDA APPROVED
          </div>
          <h1>
            Jaipur Mein Aapke<br />
            <span className="hero-accent">Sapno Ka Ghar</span>
          </h1>
          <p className="hero-subtitle">
            Villas, Kothis, Plots & Apartments in Vaishali Nagar, Mansarovar & Prime Jaipur Locations. Bank Loan Ready — Immediate Possession Available.
          </p>
          <div className="hero-ctas">
            <a href="tel:9694722722" className="btn-primary">
              <FiPhone /> Call Now — 9694-722-722
            </a>
            <a
              href="https://wa.me/919694722722?text=Hi%2C%20I'm%20interested%20in%20property%20in%20Jaipur.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <span className="trust-icon">✅</span>
            <div className="trust-text">
              <span className="trust-value">RERA</span>
              <span className="trust-label">RAJ/A/2022/4768</span>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">✅</span>
            <div className="trust-text">
              <span className="trust-value">JDA Approved</span>
              <span className="trust-label">Govt. Certified</span>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⭐</span>
            <div className="trust-text">
              <span className="trust-value">4.6★ Rating</span>
              <span className="trust-label">Google Reviews</span>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🏦</span>
            <div className="trust-text">
              <span className="trust-value">6+ Banks</span>
              <span className="trust-label">Loan Partners</span>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🏠</span>
            <div className="trust-text">
              <span className="trust-value">500+</span>
              <span className="trust-label">Properties</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FEATURED PROPERTIES ===== */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header">
            <h2>Featured Properties — <span className="accent">जयपुर की बेहतरीन प्रॉपर्टीज</span></h2>
            <div className="section-divider" />
          </div>
          <div className="properties-grid">
            {properties.map((prop, i) => (
              <PropertyCard key={prop.id} property={prop} index={i} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/properties" className="btn-primary" style={{ display: 'inline-flex' }}>
              सभी Properties देखें <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>हमारी सेवाएं — <span className="accent">आपकी ज़रूरत, हमारा समाधान</span></h2>
            <div className="section-divider" />
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header">
            <h2>Radheshyam Real Estate <span className="accent">ही क्यों?</span></h2>
            <div className="section-divider" />
          </div>
          <div className="why-grid">
            {whyChoose.map((w, i) => (
              <div className="why-card" key={i}>
                <div className="why-card-num">{i + 1}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS ===== */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>जयपुर के <span className="accent">Premium Locations</span> में प्रॉपर्टी</h2>
            <div className="section-divider" />
          </div>
          <div className="locations-grid">
            {locations.map((loc, i) => (
              <div className="location-card" key={i}>
                <h3>{loc.emoji} {loc.name}</h3>
                <p>{loc.desc}</p>
                <Link to="/locations" className="location-cta">
                  Properties देखें <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BANK PARTNERS ===== */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header">
            <h2>Our <span className="accent">Bank Partners</span></h2>
            <div className="section-divider" />
            <p>हमारी सभी properties इन banks से pre-approved हैं</p>
          </div>
          <div className="bank-strip">
            {banks.map((bank, i) => (
              <div className="bank-logo" key={i}>🏦 {bank}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <StatsCounter />

      {/* ===== TESTIMONIALS ===== */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>हमारे खुशहाल ग्राहक — <span className="accent">उनकी ज़ुबानी</span></h2>
            <div className="section-divider" />
          </div>
          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/testimonials" className="btn-primary" style={{ display: 'inline-flex' }}>
              सभी Reviews देखें <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LEAD FORM ===== */}
      <section className="section lead-form-section">
        <div className="container">
          <LeadForm />
        </div>
      </section>

      {/* ===== VIDEO TOURS ===== */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Property <span className="accent">Video Tours</span></h2>
            <div className="section-divider" />
            <p>YouTube पर हमारे property videos देखें — पारदर्शिता हमारी पहचान</p>
          </div>
          <div className="videos-grid">
            <div className="video-card">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Property Tour 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="video-card-body">
                <h3>4 BHK Luxury Villa — Vaishali Nagar</h3>
              </div>
            </div>
            <div className="video-card">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Property Tour 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="video-card-body">
                <h3>5 BHK Corner Kothi — Mansarovar</h3>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/videos" className="btn-primary" style={{ display: 'inline-flex' }}>
              सभी Videos देखें <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
