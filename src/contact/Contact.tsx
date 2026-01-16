import { useState, type FormEvent} from 'react';
import { image } from '../assets/image'
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  alert('Message envoyé !');
};

  return (
    <section className="contact-wrapper">
      <h1>ME CONTACTER</h1>
      <article className='form'>
      <div className="contact-details">           
        <p>
          N'hésitez pas à me contacter.<br/>
          Je suis toujours ouvert à discuter de nouveaux projets,<br/>
          d’idées créatives ou d’opportunités de faire partie de vos visions.
        </p>
        <p>MAIL ME</p>
        <p>steve@mail.com</p>
        <p>CALL ME</p>
        <p>+216 21 184 010</p>
        <div className="lien-social">
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="social-link" target='blank'><img src={image.linkedin} alt="lien linkedine" /></a>
          <a href="https://github.com/kuider9-web" className="social-link"><img src={image.github} alt="lien github" /></a>
        </div>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input
              name="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="votre nom"
            />
            <input
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="votre email"
            />
          </div>
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="votre message"
              rows={8}
            />
          <button type="submit" className="submit-btn">
            envoyer
          </button>
        </form>
      </div>
      </article>
    </section>
  );
}

export default Contact;