import React from "react";
import '../Footer.css'
export default function ContactUs() {
  return (
    <section className="contact-section">

      {/* ---- OLD CONTACT CONTENT (kept exactly as yours) ---- */}
      <div className="old-contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or need help? We're here to assist you!  
          Reach out anytime — our team will respond within 24 hours.
        </p>
      </div>

      {/* ---- NEW CONTACT SECTION WITH MAP + FORM ---- */}
      <div className="contact-container">

        {/* LEFT: MAP */}
        <div className="map-container">
          <iframe
            title="store-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29200.081725907203!2d72.10580165927735!3d23.81823576931558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c7d0db6c534b3%3A0x34c9aef47a82f519!2sGovernment%20Engineering%20College%2C%20Patan!5e0!3m2!1sen!2sin!4v1763204212359!5m2!1sen!2sin" 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* RIGHT: CONTACT DETAILS AND FORM */}
        <div className="contact-details">

          {/* contact info box */}
          <div className="info-box">
            <h3>Get in Touch</h3>
            <p>📍 Katpur, Patan,Gujarat</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@pastellane.com</p>
          </div>

          {/* form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}
