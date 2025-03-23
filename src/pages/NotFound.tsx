
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30 p-4">
      <div className="text-center max-w-md animate-scale-in">
        <div className="text-9xl font-bold text-primary/20 mb-6">404</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved. Please check the URL or go back to the homepage.
        </p>
        <Link to="/">
          <ButtonCustom icon={<Home />} iconPosition="left">
            Return to Home
          </ButtonCustom>
        </Link>
      </div>
      
      {/* Background elements */}
      <div className="absolute -z-10 overflow-hidden">
        <div className="absolute top-[10%] -left-[30%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[30%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>
    </div>
  );
};

export default NotFound;
