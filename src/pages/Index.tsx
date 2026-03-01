import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Clock, Award, Briefcase, MessageSquare, HeartHandshake, ChevronDown, Quote } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import heroBg from '@/assets/hero-bg.jpg';
import ceoPortrait from '@/assets/ceo-portrait.jpeg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
  'Web Development',
  'App Development',
  'UI/UX Designing',
  'WordPress / Shopify',
  'Social Media Marketing',
];

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '100+', label: 'Global Clients' },
  { value: '10+', label: 'Team Members' },
  { value: '10+', label: 'Countries Served' },
];

const whyChoose = [
  { icon: DollarSign, title: 'Cost Efficient', desc: 'Premium quality solutions at competitive pricing that maximizes your ROI.' },
  { icon: Clock, title: 'Minimal Timelines', desc: 'Agile processes ensure rapid delivery without compromising quality.' },
  { icon: Award, title: 'Quality Standards', desc: 'Industry-best practices and rigorous QA at every stage of development.' },
  { icon: Briefcase, title: 'Project Management', desc: 'Dedicated project managers keeping your project on track and transparent.' },
  { icon: MessageSquare, title: 'Effective Communication', desc: 'Real-time updates and seamless collaboration throughout the process.' },
  { icon: HeartHandshake, title: 'Lifetime Support', desc: 'Ongoing maintenance and support long after project delivery.' },
];

const faqs = [
  { q: 'What is the typical project timeline?', a: 'Timelines vary based on scope and complexity. A standard website takes 4–6 weeks, while custom applications may take 8–16 weeks. We provide detailed timelines during the discovery phase.' },
  { q: 'How is the pricing structured?', a: 'We offer flexible pricing models including fixed-price, hourly, and retainer-based engagements. Each project receives a detailed proposal after requirements analysis.' },
  { q: 'How do you handle communication during projects?', a: 'We assign a dedicated project manager and use tools like Slack, Jira, and regular video calls to ensure transparent, real-time communication throughout.' },
  { q: 'What kind of post-launch support do you offer?', a: 'We provide comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements with flexible support plans.' },
  { q: 'What technologies do you work with?', a: 'Our team is proficient in React, Node.js, Python, Flutter, React Native, AWS, and more. We select the best technology stack based on your project requirements.' },
];

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end only
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', service: '' });
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="relative py-16 md:py-24 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(165 65% 28% / 0.92), hsl(160 45% 15% / 0.95)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-primary-foreground">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Building Digital Solutions That Drive <span className="text-gradient-gold inline-block">Real Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-3">
              We craft powerful websites, scalable apps, and smart digital strategies for global businesses.
            </p>
            <p className="text-primary-foreground/60 text-sm md:text-base">
              Trusted by 100+ clients worldwide to transform their digital presence and accelerate growth.
            </p>
          </div>

          {/* Lead Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border/50">
            <h3 className="font-display text-xl font-bold text-foreground mb-1">Get a Free Consultation</h3>
            <p className="text-muted-foreground text-sm mb-6">Tell us about your project and we'll get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData(f => ({ ...f, name: e.target.value }))}
                className="px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData(f => ({ ...f, phone: e.target.value }))}
                className="px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData(f => ({ ...f, email: e.target.value }))}
                className="px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <div className="relative">
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData(f => ({ ...f, service: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select Service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
              <button
                type="submit"
                className="gradient-primary text-primary-foreground py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity mt-1"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Nexware Solutions</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                With over 5 years of experience, we've been at the forefront of digital transformation, helping businesses across the globe achieve their technology goals.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {stats.map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 100}>
                <div className="card-soft p-5 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="text-center">
              <Link
                to="/about"
                className="inline-flex gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Learn More About Us
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-gradient">Nexware Solutions</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine technical excellence with a client-first approach to deliver exceptional results.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 80}>
                <div className="card-soft p-6 md:p-8 text-center group">
                  <div className="w-14 h-14 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-[300px_1fr] gap-10 items-center max-w-4xl mx-auto">
              <div className="relative mx-auto md:mx-0">
                <img
                  src={ceoPortrait}
                  alt="CEO of Nexware Solutions"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 gradient-gold rounded-xl flex items-center justify-center shadow-lg">
                  <Quote size={28} className="text-secondary-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Message from Our CEO</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "At Nexware Solutions, we believe technology should empower businesses to achieve the extraordinary. Over the past 5 years, we've had the privilege of partnering with visionary leaders and organizations to turn ambitious ideas into impactful digital products."
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "Our commitment goes beyond code — we invest in understanding your business, your users, and your market. That's what makes us not just a vendor, but a true technology partner."
                </p>
                <div>
                  <p className="font-display font-bold text-foreground">Hussnain Haider</p>
                  <p className="text-sm text-secondary font-semibold">CEO & Founder, Nexware Solutions</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-alt">
        <div className="container mx-auto max-w-3xl">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
              <p className="text-muted-foreground">Find answers to common questions about working with us.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="card-soft px-6 border-none">
                  <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Index;
