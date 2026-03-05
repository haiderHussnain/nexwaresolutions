import { ExternalLink } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import wander from "@/assets/wander.png"
import omni from "@/assets/omni.png"
import tax from "@/assets/taxtensive.png"
import fotobox from "@/assets/fotobox.png"
import doa from "@/assets/doa.png"

const webProjects = [
  { name: 'Wander', link : ['https://www.wander.com/'] , img : wander ,
    desc: 'Wander – Premium vacation rental platform offering luxury homes, seamless booking, and curated remote-work-friendly stays worldwide..', 
    tech: ['React', 'Node.js', 'PostgreSQL'], 
    // color: 'from-primary to-primary/70' 
  },
  
    { name: 'Omnipresenti', link : ['https://omnipresenti.com/'] , img : omni ,
    desc: 'Omnipresenti – Global HR & employment platform that enables companies to hire, onboard, pay, and manage remote teams compliantly across 150+ countries.', 
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    //  color: 'from-secondary to-secondary/70' 
  },
  
    { name: 'Fotobox',  link : ['https://fotobox.eu/'] , img : fotobox ,
    desc: 'fotobox.eu – Event photo & video booth rental delivering high-quality self-service pictures, instant prints, and fun memories for weddings and celebrations.', 
    tech: ['Shopware'], 
    // color: 'from-primary to-primary/70'
   },
  
    { name: 'Taxtensive',  link : ['https://taxtensive.com/'] , img : tax ,
    desc: 'Taxtensive – Online tax & financial services platform simplifying tax filing, bookkeeping, business formation, compliance, and payroll with expert support.', 
    tech: ['Vue.js', 'Laravel' , 'MySQL'], 
    // color: 'from-secondary to-secondary/70'
   },
  
    { name: 'Door of Awareness',  link : ['https://doafreerishta.com/'] , img : doa ,
      desc: 'doafreerishta.com – Free Pakistani matrimonial platform for finding life partners with advanced matchmaking, privacy control, and unlimited free messaging.', 
      tech: ['Laraval', 'Firebase', 'PHP', ], 
      // color: 'from-primary to-primary/70' 
    },
  
    // { name: 'SaaS Analytics Tool', link : [''] ,
    //   desc: 'Business intelligence tool with custom dashboards, data pipelines, and team collaboration.', 
    //   tech: ['Angular', 'Python', 'Elasticsearch', 'Docker'], color: 'from-secondary to-secondary/70' },
];

const mobileProjects = [
  {
    name: 'Fofo', desc: 'Fofo stands for “Fear of Forgetting”—and it’s here to ensure you never lose track of what matters. Whether it’s Instagram Reels, TikToks, articles, videos, or ideas, Fofo is the ultimate app for saving, organizing, and rediscovering your favorite content.',
    tech: ['React Native', 'Node.js'], appstore: ['https://apps.apple.com/us/app/fofo-ai-save-organize/id6738624828'],
    img : ["@/assets/fofo-icon.png"] ,
    playstore: ['https://play.google.com/store/apps/details?id=com.fofoapp&pcampaignid=web_share']
  },

  {
    name: 'AfroTech Connect', desc: `AfroTech Connect is your all-in-one companion to maximize your AfroTech Conference and brand experience. We understand that AfroTech is more than an event; it's a community, a network, and a platform for professional growth. With AfroTech Connect.`,
    tech: ['React Native', 'Node.js', 'firebase'], appstore: ['https://apps.apple.com/us/app/afrotech-connect/id6463799977'],
    playstore: ['https://play.google.com/store/apps/details?id=com.afrotech&pcampaignid=web_share'], web: ['https://afrotechconference.com/']
  },

  {
    name: 'KNO', desc: 'With people moving and changing jobs all the time, keeping track of the best way to reach your friends, clients and colleagues is getting more time consuming. So KnoRe:Me Inc. is working to change how people connect and stay connected, by making the whole process easier and reduce the workload in our lives.',
    tech: ['React Native', 'Node.js', 'firebase'],
    playstore: ['https://play.google.com/store/apps/details?id=kno.kno&pcampaignid=web_share']
  },
  // { name: 'SecureVault', desc: 'Encrypted document management app with biometric authentication and cloud sync.', tech: ['Swift', 'Kotlin', 'AWS S3'] },
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
                  {/* ${project.color} */}
                  <div className={`h-48 bg-gradient-to-br flex items-center justify-center relative overflow-hidden`}>
                    {/* <span className="text-primary-foreground/20 text-6xl font-bold font-display">{project.name.charAt(0)}</span> */}
                    <img src={project.img} alt="" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground font-semibold text-sm flex items-center gap-1">
                        <a target='_blank' href={project.link} className='flex gap-2 items-center' >
                        <ExternalLink size={14} /> 
                        View Details
                        </a>
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
                     
                     {project.appstore ?
                     <a target='_blank' href={project.appstore}>
                        <button className="px-4 py-2 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-80 transition-opacity ">{project.appstore ? "App Store" : ""}</button>
                      </a> 
                      : "" }

                      {project.playstore ? 
                      <a href={project.playstore}>
                        <button className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-80 transition-opacity">Play Store</button>
                      </a>
                      : "" }
                      
                      {project.web ? 
                      <a href={project.web}>
                        <button className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-xs font-semibold hover:opacity-80 transition-opacity">Web</button>
                      </a>
                      : "" }

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
