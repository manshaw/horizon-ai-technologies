import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact | HorizonAI Tech' };

export default function Contact() {
  return (
    <section id="contact" style={{ paddingTop: 150 }}>
      <div className="wrap">
        <h2 className="h2">Tell us what you want to build</h2>
        <p className="lead">Send a short note and we will reply with next steps.</p>
        <div className="cgrid">
          <div>
            <a href="mailto: info@horizonaitechnologies.com">info@horizonaitechnologies.com</a><small>Email</small>
            <a href="tel:0333 6781336">0333 6781336</a><small>Phone</small>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
