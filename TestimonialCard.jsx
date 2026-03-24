import { FiStar } from 'react-icons/fi';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <FiStar
            key={i}
            fill={i < testimonial.rating ? '#C9A84C' : 'none'}
            stroke={i < testimonial.rating ? '#C9A84C' : '#ddd'}
            size={16}
          />
        ))}
      </div>
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="testimonial-name">{testimonial.name}</div>
          <div className="testimonial-location">{testimonial.location}</div>
        </div>
      </div>
    </div>
  );
}
