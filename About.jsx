import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const highlights = [
  { icon: '🏛️', title: 'RERA Registered', desc: 'RAJ/A/2022/4768 — पूर्ण कानूनी सुरक्षा' },
  { icon: '✅', title: 'JDA Approved', desc: 'सरकारी मान्यता प्राप्त प्रॉपर्टीज' },
  { icon: '🏦', title: 'Bank Loan Ready', desc: 'SBI, HDFC, LIC, PNB — आसान लोन प्रोसेस' },
  { icon: '🔑', title: 'Ready to Move', desc: 'तुरंत कब्ज़ा — कोई इंतज़ार नहीं' },
];

export default function About() {
  return (
    <>
      <div className="page-banner">
        <h1>About Us</h1>
        <p>Radheshyam Real Estate — जयपुर का भरोसेमंद नाम</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / About Us
        </div>
      </div>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '20px', fontSize: 'clamp(1.5rem, 3.5vw, 2rem)' }}>
            Radheshyam Real Estate — <span className="accent">जयपुर का भरोसेमंद नाम</span>
          </h2>
          <p style={{ color: 'var(--text-medium)', lineHeight: '1.8', marginBottom: '16px' }}>
            Radheshyam Real Estate जयपुर की एक RERA रजिस्टर्ड और विश्वसनीय रियल एस्टेट कंपनी है। हम वैशाली नगर, मानसरोवर, निर्माण नगर और जयपुर के प्रमुख इलाकों में Villas, Kothis, Plots और Apartments उपलब्ध कराते हैं।
          </p>
          <p style={{ color: 'var(--text-medium)', lineHeight: '1.8', marginBottom: '16px' }}>
            हमारी सभी प्रॉपर्टीज JDA Approved हैं और SBI, HDFC, LIC Housing, PNB Housing जैसे प्रमुख बैंकों से Home Loan की सुविधा उपलब्ध है। Ready-to-move properties के साथ तुरंत कब्ज़ा संभव है।
          </p>
          <p style={{ color: 'var(--text-medium)', lineHeight: '1.8' }}>
            हम 7 दिन, सुबह 9:30 से शाम 7:30 तक आपकी सेवा में उपलब्ध हैं। चाहे आप पहली बार घर खरीद रहे हों या निवेश के लिए प्रॉपर्टी ढूंढ रहे हों — हम आपको सही विकल्प और पूरी गाइडेंस देते हैं।
          </p>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <div className="about-card" key={i}>
                <div className="about-card-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/properties" className="btn-primary" style={{ display: 'inline-flex' }}>
              Properties देखें <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
