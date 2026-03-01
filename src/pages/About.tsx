import { Link } from 'react-router-dom';
import { Target, Eye, Zap, Users, Shield, Globe } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import aboutHero from '@/assets/about-hero.jpg';

const coreValues = [
  { icon: Zap, title: 'Innovation', desc: 'We embrace cutting-edge technologies and creative thinking.' },
  { icon: Users, title: 'Collaboration', desc: 'We work as true partners with our clients at every step.' },
  { icon: Shield, title: 'Integrity', desc: 'Transparency and honesty guide all our interactions.' },
  { icon: Globe, title: 'Global Mindset', desc: 'We think globally while delivering locally relevant solutions.' },
];

const team = [
  { name: 'Hussnain Haider', role: 'CEO & Founder', initials: 'HH' },
  { name: 'Haris Ali', role: 'CTO', initials: 'HA' },
  { name: 'Zain-Ul-Abideen', role: 'Lead Designer', initials: 'ZI' },
  { name: 'Haider Nawaz', role: 'Project Manager', initials: 'HN' },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-20 md:py-28 px-4 text-center"
        style={{
          backgroundImage: `linear-gradient(hsl(160 30% 14% / 0.85), hsl(160 30% 14% / 0.9)), url(${aboutHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">About Nexware Solutions</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Your trusted partner in digital transformation since 2009.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6 text-center">Our <span className="text-gradient">Story</span></h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-center">
              <p>Founded in 2021, Nexware Solutions began with a simple vision: to bridge the gap between complex technology and real business value. What started as a small team of passionate developers has grown into a full-service digital agency serving clients across 10+ countries.</p>
              <p>Over the years, we've delivered 50+ successful projects ranging from enterprise web platforms to mobile applications, always maintaining our commitment to quality, innovation, and client satisfaction.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateOnScroll>
              <div className="card-soft p-8">
                <div className="w-14 h-14 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center mb-5">
                  <Target size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To empower businesses with innovative, reliable, and scalable digital solutions that drive measurable growth and create lasting impact in an ever-evolving digital landscape.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <div className="card-soft p-8">
                <div className="w-14 h-14 rounded-2xl gradient-gold text-secondary-foreground flex items-center justify-center mb-5">
                  <Eye size={24} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be recognized as a global leader in digital transformation, known for our technical excellence, creative innovation, and unwavering commitment to client success.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-10 text-center">Core <span className="text-gradient">Values</span></h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coreValues.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <div className="card-soft p-6 text-center group">
                  <div className="w-12 h-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <v.icon size={20} />
                  </div>
                  <h4 className="font-display font-semibold mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-10 text-center">Our <span className="text-gradient">Team</span></h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 80}>
                <div className="card-soft p-6 text-center">
                  <div className="w-20 h-20 rounded-full gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {member.initials}
                  </div>
                  <h4 className="font-display font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-primary-foreground/70 mb-8">Let's discuss how Nexware Solutions can help transform your business.</p>
          <Link to="/contact" className="inline-flex gradient-gold text-secondary-foreground px-8 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
