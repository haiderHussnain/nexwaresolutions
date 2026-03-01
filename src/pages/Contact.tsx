import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="gradient-primary py-20 md:py-28 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Let's discuss your project. We'd love to hear from you.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Left - Contact Info */}
            <AnimateOnScroll>
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in <span className="text-gradient">Touch</span></h2>
                <div className="flex flex-col gap-5 mb-8">
                  {[
                    { icon: Phone, label: 'Phone', value: '+92 314 8989825', href: 'tel:+92 314 8989825' },
                    { icon: Mail, label: 'Email', value: 'solutionsnexware@gmail.com', href: 'mailto:solutionsnexware@gmail.com' },
                    { icon: MapPin, label: 'Address', value: 'Pia Road Johar Town Lahore' },
                    { icon: Clock, label: 'Working Hours', value: 'Mon – Fri: 9:00 AM – 6:00 PM' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-56 rounded-2xl bg-muted flex items-center justify-center border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3403.362709829524!2d74.29080297560908!3d31.459207174242085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI3JzMzLjIiTiA3NMKwMTcnMzYuMiJF!5e0!3m2!1sen!2s!4v1772389463980!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right - Form */}
            <AnimateOnScroll delay={100}>
              <div className="card-soft p-8">
                <h3 className="font-display text-xl font-bold mb-1">Send Us a Message</h3>
                <p className="text-sm text-muted-foreground mb-6">Fill the form below and we'll respond within 24 hours.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                    className="px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                    className="px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                    className="px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                  <button
                    type="submit"
                    className="gradient-primary text-primary-foreground py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
