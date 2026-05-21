'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [purpose, setPurpose] = useState('business');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main>
      <div className="contact-page-layout">
        {/* ── Left Column ── */}
        <div>
          <h1 className="contact-title">Contact</h1>
          <div className="contact-portrait">
            <Image
              src="/behind-the-scenes/dsc05651.jpg"
              alt="CBCODER — Cinematographer"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(10%) contrast(1.05)' }}
            />
          </div>
        </div>

        {/* ── Right Column ── */}
        <div>
          {/* Representation */}
          <div className="representation-block">
            <div>
              <p className="rep-label">Representation</p>
              <p className="rep-name">CBCODER<br/>Visual Studio</p>
            </div>
            <div className="rep-contact">
              <p><a href="mailto:info@elisante.com">info@elisante.com</a></p>
              <p>+255 684 377 467</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.5rem' }}>Dar es Salaam, Tanzania</p>
            </div>
          </div>

          {submitted ? (
            <div className="success-message">
              <h3>Message Received.</h3>
              <p style={{ margin: '0 auto 2rem auto' }}>
                Thank you for reaching out. I will be in touch shortly to discuss your vision.
              </p>
              <button
                className="btn"
                onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', message: '' }); }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form-grid">
              {/* Purpose Radio */}
              <div className="purpose-block">
                <p className="purpose-label">Purpose of email <span>(required)</span></p>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="purpose"
                      value="business"
                      checked={purpose === 'business'}
                      onChange={() => setPurpose('business')}
                    />
                    Business Inquiries
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="purpose"
                      value="booking"
                      checked={purpose === 'booking'}
                      onChange={() => setPurpose('booking')}
                    />
                    Booking &amp; Schedule
                  </label>
                </div>
              </div>

              {/* Name Row */}
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', letterSpacing: '0.05em' }}>Name</p>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName">First Name <span>(required)</span></label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="styled-input"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName">Last Name <span>(required)</span></label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="styled-input"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="form-field">
                <label htmlFor="email">Email <span>(required)</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="styled-input"
                />
              </div>

              {/* Message */}
              <div className="form-field">
                <label htmlFor="message">
                  Message <span style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>(All Spam Will Be Ignored)</span> <span>(required)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="styled-textarea"
                />
              </div>

              <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Newsletter Bar */}
      <div className="newsletter-bar">
        <p>Get notified with new projects, gear and stories.</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </main>
  );
}
