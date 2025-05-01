
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonCustom } from "@/components/ui/button-custom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-64 pb-16 md:pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[100px]" />
      </div>
      
      {/* Stats */}
      <div className="container mx-auto px-4">
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
    </section>
  );
};

export default Hero;
