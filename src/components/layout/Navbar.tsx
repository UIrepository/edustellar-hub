import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Menu, X, Sun, Moon, Computer } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if user is logged in (will be updated with actual auth)
  const isLoggedIn = false;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "NEET", path: "/neet" },
    { name: "JEE", path: "/jee" },
    { name: "IIT-M BS", path: "/iitm-bs" },
    { name: "Career", path: "/career" }, // Added Career link
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-morphism py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold tracking-tight"
        >
          <span className="relative z-10 text-primary">Unknown</span>
          <span className="relative z-10">IITians</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-200 relative",
                location.pathname === link.path 
                  ? "text-primary" 
                  : "hover:text-primary",
                "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggler */}
          <div className="relative">
            {theme === "light" && (
              <ButtonCustom 
                size="icon" 
                variant="ghost" 
                onClick={() => setTheme("dark")}
                className="animate-fade-in"
              >
                <Sun className="h-5 w-5" />
              </ButtonCustom>
            )}
            {theme === "dark" && (
              <ButtonCustom 
                size="icon" 
                variant="ghost" 
                onClick={() => setTheme("system")}
                className="animate-fade-in"
              >
                <Moon className="h-5 w-5" />
              </ButtonCustom>
            )}
            {theme === "system" && (
              <ButtonCustom 
                size="icon" 
                variant="ghost" 
                onClick={() => setTheme("light")}
                className="animate-fade-in"
              >
                <Computer className="h-5 w-5" />
              </ButtonCustom>
            )}
          </div>

          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <ButtonCustom variant="outline">Dashboard</ButtonCustom>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <ButtonCustom variant="ghost">Log in</ButtonCustom>
              </Link>
              <Link to="/register">
                <ButtonCustom>Get Started</ButtonCustom>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme toggler for mobile */}
          <div className="relative">
            {theme === "light" && (
              <ButtonCustom 
                size="icon" 
                variant="ghost" 
                onClick={() => setTheme("dark")}
                className="animate-fade-in"
              >
                <Sun className="h-5 w-5" />
              </ButtonCustom>
            )}
            {theme === "dark" && (
              <ButtonCustom 
                size="icon" 
                variant="ghost" 
                onClick={() => setTheme("system")}
                className="animate-fade-in"
              >
                <Moon className="h-5 w-5" />
              </ButtonCustom>
            )}
            {theme === "system" && (
              <ButtonCustom 
                size="icon" 
                variant="ghost" 
                onClick={() => setTheme("light")}
                className="animate-fade-in"
              >
                <Computer className="h-5 w-5" />
              </ButtonCustom>
            )}
          </div>
          
          <ButtonCustom 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </ButtonCustom>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-background glass-morphism z-40 transition-all duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-lg font-medium py-3 px-4 rounded-lg transition-all",
                location.pathname === link.path 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-primary/5 hover:text-primary",
                "animate-slide-up",
                `animate-delay-${i * 100}`
              )}
            >
              {link.name}
            </Link>
          ))}
          {!isLoggedIn && (
            <div className="pt-4 space-y-3">
              <Link to="/login">
                <ButtonCustom variant="outline" fullWidth>Log in</ButtonCustom>
              </Link>
              <Link to="/register">
                <ButtonCustom fullWidth>Get Started</ButtonCustom>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
