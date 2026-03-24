import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <>
      <div className="page-banner">
        <h1>Testimonials</h1>
        <p>हमारे खुशहाल ग्राहक — उनकी ज़ुबानी</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / Testimonials
        </div>
      </div>

      <section className="section bg-cream">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px', padding: '30px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>आप भी अपना Dream Home ढूंढ रहे हैं?</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>अभी Call करें या WhatsApp करें — Free Consultation पाएं</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:9694722722" className="btn-primary" style={{ display: 'inline-flex' }}>📞 Call Now</a>
              <a href="https://wa.me/919694722722" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ display: 'inline-flex' }}>💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
