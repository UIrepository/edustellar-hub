
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonCustom } from "@/components/ui/button-custom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Small eyebrow */}
          <div className="inline-block animate-fade-in">
            <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              Empowering future leaders in NEET, JEE & IIT-M BS
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up animate-delay-200">
            <span className="text-balance">Student's Most Trusted Educational Website</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty animate-slide-up animate-delay-300">
            Ignite Your Passion, Shape Your Future with Education!
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up animate-delay-400">
            <Link to="/login">
              <ButtonCustom size="lg" icon={<ArrowRight />} iconPosition="right" 
                className="bg-blue-50 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-50 transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started
              </ButtonCustom>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up animate-delay-500">
            {[
              { value: "160k+", label: "Total Viewers" },
              { value: "200+", label: "Notes & PYQs" },
              { value: "98%", label: "Positive Feedback" },
              { value: "5k+", label: "Community Members" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
