import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-topbar text-primary-foreground py-2 px-4 text-sm hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+92 314 8989825" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Phone size={14} />
            <span>+92 314 8989825</span>
          </a>
          <a href="mailto:solutionsnexware@gmail.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
            <Mail size={14} />
            <span>solutionsnexware@gmail.com</span>
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            <span>Pia Road Johar Town Lahore</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a target='_blank' href="https://www.facebook.com/profile.php?id=61586688483260" className="hover:text-secondary transition-colors"><Facebook size={14} /></a>
          <a target='_blank' href="https://www.linkedin.com/company/nexware-solution/" className="hover:text-secondary transition-colors"><Linkedin size={14} /></a>
          {/* <a href="#" className="hover:text-secondary transition-colors"><Twitter size={14} /></a> */}
          <a target='_blank' href="https://www.instagram.com/nexwaresolutions/" className="hover:text-secondary transition-colors"><Instagram size={14} /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
