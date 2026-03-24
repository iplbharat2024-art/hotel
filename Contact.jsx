import { Link } from 'react-router-dom';
import { FiPhone, FiMapPin, FiClock, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import LeadForm from '../components/LeadForm';

const contactInfo = [
  { icon: <FiPhone />, label: 'Phone', value: '9694-722-722', link: 'tel:9694722722' },
  { icon: <FiPhone />, label: 'Alt Phone', value: '76900-30225', link: 'tel:7690030225' },
  { icon: <FaWhatsapp />, label: 'WhatsApp', value: 'Chat on WhatsApp', link: 'https://wa.me/919694722722' },
  { icon: <FiClock />, label: 'Hours', value: 'Mon-Sun: 9:30 AM – 7:30 PM' },
  { icon: <FiMapPin />, label: 'Address', value: 'Gandhi Path W, Maa Hinglaj Nagar, Gulab Vihar B, Vaishali Nagar, Jaipur, Rajasthan 302021' },
];

export default function Contact() {
  return (
    <>
      <div className="page-banner">
        <h1>संपर्क करें</h1>
        <p>आज ही Free Consultation पाएं — हमारी team 24 घंटे के अंदर संपर्क करेगी</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / Contact
        </div>
      </div>

      <section className="section bg-cream">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="contact-info-cards">
                {contactInfo.map((info, i) => (
                  <div className="contact-info-card" key={i}>
                    <div className="contact-info-icon">{info.icon}</div>
                    <div>
                      <h4>{info.label}</h4>
                      {info.link ? (
                        <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                          <p style={{ color: 'var(--terracotta)' }}>{info.value}</p>
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="map-container" style={{ marginTop: '24px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5!2d75.72!3d26.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVaishali+Nagar+Jaipur!5e0!3m2!1sen!2sin!4v1"
                  title="Radheshyam Real Estate Location"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
