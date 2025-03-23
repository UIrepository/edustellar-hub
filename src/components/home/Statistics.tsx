
import { useEffect, useRef, useState } from "react";
import { CardCustom } from "@/components/ui/card-custom";
import { cn } from "@/lib/utils";

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
  index: number;
}

const AnimatedValue = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = performance.now();

    const animateValue = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.floor(easeOutQuart * end);
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateValue);
      } else {
        setDisplayValue(end);
      }
    };

    requestAnimationFrame(animateValue);
  }, [value, isVisible]);

  return <div ref={ref}>{displayValue.toLocaleString()}{suffix}</div>;
};

const Stat = ({ value, suffix, label, description, index }: StatProps) => {
  return (
    <CardCustom 
      glass
      className={cn(
        "transition-all duration-500 h-full",
        "animate-slide-up",
        `animate-delay-${Math.min(index * 100, 500)}`
      )}
    >
      <div className="p-6 flex flex-col">
        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
          <AnimatedValue value={value} suffix={suffix} />
        </div>
        <div className="text-lg font-medium mb-2">{label}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </CardCustom>
  );
};

const Statistics = () => {
  const stats = [
    {
      value: 10000,
      suffix: "+",
      label: "Students",
      description: "Active learners across all our courses and programs",
    },
    {
      value: 95,
      suffix: "%",
      label: "Success Rate",
      description: "Of our students qualify for their target exams",
    },
    {
      value: 150,
      suffix: "+",
      label: "Expert Mentors",
      description: "IITians providing guidance and educational support",
    },
    {
      value: 500,
      suffix: "+",
      label: "Video Lectures",
      description: "High quality educational content across all subjects",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
            Why Choose Unknown IITians?
          </h2>
          <p className="text-muted-foreground animate-slide-up animate-delay-100">
            We're dedicated to providing the highest quality education and mentorship for students preparing for competitive exams and degree programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Stat 
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
