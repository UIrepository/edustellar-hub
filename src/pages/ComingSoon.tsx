
import { Link } from "react-router-dom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Home, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  
  // Calculate the countdown to launch (example: 30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing! We'll notify you when we launch.");
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30 p-4">
      <div className="text-center max-w-md animate-scale-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Coming Soon</h1>
          <p className="text-xl text-muted-foreground mb-6">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
          
          <div className="flex justify-center items-center space-x-4 mb-8">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
              <div key={unit} className="text-center">
                <div className="bg-background/70 backdrop-blur-md rounded-lg p-3 w-20 h-20 flex items-center justify-center">
                  <span className="text-3xl font-bold">{[30, 12, 45, 20][i]}</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{unit}</div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubscribe} className="mb-8">
            <p className="mb-4 text-muted-foreground">
              Get notified when we launch:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1"
              />
              <ButtonCustom 
                type="submit" 
                icon={<Mail className="h-4 w-4" />} 
                iconPosition="right"
                isLoading={isSubscribing}
                loadingText="Subscribing..."
              >
                Notify Me
              </ButtonCustom>
            </div>
          </form>
          
          <Link to="/">
            <ButtonCustom variant="outline" icon={<Home />} iconPosition="left">
              Return to Home
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

export default ComingSoon;
