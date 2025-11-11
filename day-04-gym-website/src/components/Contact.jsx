import { useState } from "react";
import './Contact.css'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace alert later with backend/API/EmailJS
    alert(`
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />

        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <textarea placeholder="Your message..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
