import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    budget: '',
    propertyType: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `🏠 *New Property Enquiry*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n💰 Budget: ${form.budget}\n🏗️ Type: ${form.propertyType}\n📍 Location: ${form.location}\n💬 Message: ${form.message || 'N/A'}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919694722722?text=${encoded}`, '_blank');
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <h3>🏠 Free Property Consultation पाएं</h3>
      <p className="form-subtitle">नीचे Form भरें — हमारी team 24 घंटे के अंदर संपर्क करेगी</p>

      <div className="form-group">
        <label>आपका नाम *</label>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>मोबाइल नंबर *</label>
        <input type="tel" name="phone" placeholder="98XXXXXXXX" value={form.phone} onChange={handleChange} required />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>बजट</label>
          <select name="budget" value={form.budget} onChange={handleChange}>
            <option value="">Select Budget</option>
            <option value="₹50L - 1Cr">₹50L - 1Cr</option>
            <option value="₹1Cr - 2Cr">₹1Cr - 2Cr</option>
            <option value="₹2Cr - 3Cr">₹2Cr - 3Cr</option>
            <option value="₹3Cr+">₹3Cr+</option>
          </select>
        </div>
        <div className="form-group">
          <label>Property Type</label>
          <select name="propertyType" value={form.propertyType} onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="Villa / Kothi">Villa / Kothi</option>
            <option value="Plot">Plot</option>
            <option value="Apartment">Apartment</option>
            <option value="Duplex">Duplex</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Preferred Location</label>
        <select name="location" value={form.location} onChange={handleChange}>
          <option value="">Select Location</option>
          <option value="Vaishali Nagar">Vaishali Nagar</option>
          <option value="Mansarovar">Mansarovar</option>
          <option value="Nirman Nagar">Nirman Nagar</option>
          <option value="Jagatpura">Jagatpura</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Message (Optional)</label>
        <textarea name="message" placeholder="कोई विशेष ज़रूरत बताएं..." value={form.message} onChange={handleChange} />
      </div>

      <button type="submit" className="btn-submit">
        <FaWhatsapp size={20} /> Free Consultation पाएं
      </button>
    </form>
  );
}
