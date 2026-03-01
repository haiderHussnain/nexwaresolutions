import { ExternalLink } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const webProjects = [
  { name: 'FinTech Dashboard', desc: 'A real-time financial analytics dashboard with advanced charting and reporting capabilities.', tech: ['React', 'Node.js', 'D3.js', 'PostgreSQL'], color: 'from-primary to-primary/70' },
  { name: 'E-Commerce Platform', desc: 'Full-featured online store with payment integration, inventory management, and analytics.', tech: ['Next.js', 'Stripe', 'Tailwind CSS', 'MongoDB'], color: 'from-secondary to-secondary/70' },
  { name: 'Healthcare Portal', desc: 'Patient management system with telemedicine, appointment scheduling, and EHR integration.', tech: ['React', 'Python', 'AWS', 'HIPAA Compliant'], color: 'from-primary to-primary/70' },
  { name: 'Real Estate Marketplace', desc: 'Property listing platform with virtual tours, advanced search, and agent management.', tech: ['Vue.js', 'Laravel', 'Google Maps', 'MySQL'], color: 'from-secondary to-secondary/70' },
  { name: 'EdTech Learning Platform', desc: 'Interactive e-learning platform with live classes, course management, and progress tracking.', tech: ['React', 'Firebase', 'WebRTC', 'Stripe'], color: 'from-primary to-primary/70' },
  { name: 'SaaS Analytics Tool', desc: 'Business intelligence tool with custom dashboards, data pipelines, and team collaboration.', tech: ['Angular', 'Python', 'Elasticsearch', 'Docker'], color: 'from-secondary to-secondary/70' },
];

const mobileProjects = [
  { name: 'FoodDash', desc: 'On-demand food delivery app with real-time tracking, ratings, and multiple payment options.', tech: ['React Native', 'Node.js', 'Socket.io'] },
  { name: 'FitTrack Pro', desc: 'Fitness tracking app with workout plans, nutrition logging, and wearable device integration.', tech: ['Flutter', 'Firebase', 'HealthKit'] },
  { name: 'TravelMate', desc: 'Travel planning app with itinerary builder, booking integration, and offline maps.', tech: ['React Native', 'GraphQL', 'Google Maps'] },
  { name: 'SecureVault', desc: 'Encrypted document management app with biometric authentication and cloud sync.', tech: ['Swift', 'Kotlin', 'AWS S3'] },
];

const Portfolio = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-primary py-20 md:py-28 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Our Portfolio</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">A showcase of our finest work across web and mobile platforms.</p>
        </div>
      </section>

      {/* Web Projects */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-2 text-center">Web <span className="text-gradient">Projects</span></h2>
            <p className="text-muted-foreground text-center mb-10">Scalable, high-performance web solutions.</p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, i) => (
              <AnimateOnScroll key={project.name} delay={i * 80}>
                <div className="card-soft overflow-hidden group">
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-primary-foreground/20 text-6xl font-bold font-display">{project.name.charAt(0)}</span>
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground font-semibold text-sm flex items-center gap-1">
                        <ExternalLink size={14} /> View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Projects */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-2 text-center">Mobile App <span className="text-gradient">Projects</span></h2>
            <p className="text-muted-foreground text-center mb-10">Beautiful, performant mobile experiences.</p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mobileProjects.map((project, i) => (
              <AnimateOnScroll key={project.name} delay={i * 80}>
                <div className="card-soft p-6 md:p-8 flex gap-5 items-start">
                  <div className="w-16 h-28 rounded-xl gradient-primary flex-shrink-0 flex items-center justify-center border-2 border-primary-foreground/20">
                    <span className="text-primary-foreground font-bold text-lg">{project.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-80 transition-opacity">App Store</button>
                      <button className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-80 transition-opacity">Play Store</button>
                    </div>
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

export default Portfolio;
