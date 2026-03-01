import { Link } from 'react-router-dom';
import { Globe, Smartphone, Palette, ShoppingBag, Megaphone, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const servicesData = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'We build high-performance, scalable web applications using modern technologies that deliver exceptional user experiences and business results.',
    benefits: ['Custom web applications', 'E-commerce platforms', 'Progressive Web Apps (PWA)', 'API development & integration', 'Performance optimization'],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'Native and cross-platform mobile applications that engage users and drive growth on iOS and Android platforms.',
    benefits: ['iOS & Android native apps', 'Cross-platform (React Native / Flutter)', 'App store optimization', 'Push notifications & analytics', 'Ongoing maintenance'],
  },
  {
    icon: Palette,
    title: 'UI/UX Designing',
    desc: 'User-centered design that combines aesthetics with functionality to create intuitive, engaging digital experiences.',
    benefits: ['User research & personas', 'Wireframing & prototyping', 'Visual design systems', 'Interaction design', 'Usability testing'],
  },
  {
    icon: ShoppingBag,
    title: 'WordPress / Shopify',
    desc: 'Custom WordPress themes and Shopify stores that are beautiful, fast, and optimized for conversions.',
    benefits: ['Custom theme development', 'Plugin/app customization', 'WooCommerce / Shopify setup', 'SEO optimization', 'Speed optimization'],
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    desc: 'Strategic social media campaigns that build brand awareness, engage audiences, and drive measurable business outcomes.',
    benefits: ['Strategy & content planning', 'Paid advertising campaigns', 'Community management', 'Analytics & reporting', 'Influencer partnerships'],
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-primary py-20 md:py-28 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">End-to-end digital solutions tailored to your business needs.</p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-10">
            {servicesData.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 60}>
                <div className={`card-soft p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <service.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                      {service.benefits.map(b => (
                        <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                          <ArrowRight size={14} className="text-secondary flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
                      Get Started <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
