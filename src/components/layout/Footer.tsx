
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { ArrowUp, UserCheck } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
              <span className="text-primary">Unknown</span>
              <span>IITians</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Preparing students for success in competitive exams through quality education and resources.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/neet" className="text-muted-foreground hover:text-primary transition-colors">
                  NEET
                </Link>
              </li>
              <li>
                <Link to="/jee" className="text-muted-foreground hover:text-primary transition-colors">
                  JEE
                </Link>
              </li>
              <li>
                <Link to="/iitm-bs" className="text-muted-foreground hover:text-primary transition-colors">
                  IITM-BS
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-muted-foreground hover:text-primary transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link to="/employee-verification" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                  <UserCheck className="h-4 w-4" />
                  Employee Verification
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/intern-verification" className="text-muted-foreground hover:text-primary transition-colors">
                  Internship Verification
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Unknown IITians. All rights reserved.
          </p>
          
          <div 
            className={cn(
              "w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center cursor-pointer transition-colors mt-4 md:mt-0",
              "hover:animate-bounce"
            )}
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
