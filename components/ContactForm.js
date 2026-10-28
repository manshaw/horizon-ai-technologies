'use client';
import { useState } from 'react';

// For now this opens the visitor's email app. Replace send() with a call to an API route or email service later.
export default function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const set = (key) => (e) => setF({ ...f, [key]: e.target.value });
  const send = () => {
    const subject = encodeURIComponent('Website enquiry from ' + f.name);
    const body = encodeURIComponent(f.message + '\n\n' + f.name + ' (' + f.email + ')');
    window.location.href = `mailto:info@horizonaitechnologies.com?subject=${subject}&body=${body}`;
  };
  return (
    <div>
      <label className="fld"><span>Your name</span><input value={f.name} onChange={set('name')} autoComplete="name" /></label>
      <label className="fld"><span>Your email</span><input type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
      <label className="fld"><span>Project details</span><textarea value={f.message} onChange={set('message')} /></label>
      <button className="btn" type="button" onClick={send}>Send message</button>
    </div>
  );
}
