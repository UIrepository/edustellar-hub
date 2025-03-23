
import { Link } from "react-router-dom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Home, Settings } from "lucide-react";

const UnderMaintenance = () => {
  // Calculate the estimated time when maintenance will be complete
  const completionTime = new Date();
  completionTime.setHours(completionTime.getHours() + 3);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30 p-4">
      <div className="text-center max-w-md animate-scale-in">
        <Settings className="h-20 w-20 mx-auto mb-6 text-primary animate-spin-slow" />
        
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Under Maintenance</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our site is currently undergoing scheduled maintenance. We'll be back soon with new features and improvements!
          </p>
          
          <div className="bg-background/70 backdrop-blur-md rounded-lg p-6 mb-8">
            <h2 className="text-lg font-medium mb-2">Estimated Completion Time</h2>
            <p className="text-2xl font-bold mb-2">
              {completionTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
            <p className="text-sm text-muted-foreground">
              {completionTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          
          <Link to="/">
            <ButtonCustom variant="outline" icon={<Home />} iconPosition="left">
              Try Accessing Homepage
            </ButtonCustom>
          </Link>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -z-10 overflow-hidden">
        <div className="absolute top-[10%] -left-[30%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[30%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>
    </div>
  );
};

export default UnderMaintenance;
