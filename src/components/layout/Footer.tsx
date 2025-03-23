
import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Send, BookOpen, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = {
    platform: [
      { name: "Courses", href: "/courses" },
      { name: "Mock Tests", href: "/mock-tests" },
      { name: "NEET", href: "/neet" },
      { name: "JEE", href: "/jee" },
      { name: "IIT-M BS", href: "/iitm-bs" },
    ],
    resources: [
      { name: "Study Materials", href: "/resources/study-materials" },
      { name: "PYQs", href: "/resources/pyqs" },
      { name: "Syllabus", href: "/resources/syllabus" },
      { name: "News & Updates", href: "/resources/news" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Partners", href: "/partners" },
      { name: "Support", href: "/support" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: <Instagram className="h-5 w-5" />, 
      href: "https://instagram.com" 
    },
    { 
      name: "WhatsApp", 
      icon: <MessageCircle className="h-5 w-5" />, 
      href: "https://whatsapp.com" 
    },
    { 
      name: "Telegram", 
      icon: <Send className="h-5 w-5" />, 
      href: "https://telegram.org" 
    },
    { 
      name: "Medium", 
      icon: <BookOpen className="h-5 w-5" />, 
      href: "https://medium.com" 
    },
    { 
      name: "Linktree", 
      icon: <ExternalLink className="h-5 w-5" />, 
      href: "https://linktr.ee" 
    },
  ];

  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <span className="text-primary">Unknown</span>
              <span>IITians</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Empowering students with high-quality resources, mentorship, and community engagement for NEET, JEE, and IIT Madras BS Degree preparations.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-background hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">Platform</h3>
            <ul className="space-y-3">
              {links.platform.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Unknown IITians. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              to="/terms" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link 
              to="/privacy" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link 
              to="/cookies" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
