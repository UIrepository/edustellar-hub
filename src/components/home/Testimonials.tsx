
import { useState, useEffect, useRef } from "react";
import { CardCustom } from "@/components/ui/card-custom";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  content: string;
  name: string;
  role: string;
  image: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: "1",
      content: "The NEET crash course by Unknown IITians was instrumental in my success. The structured approach and expert guidance helped me secure a seat in a top medical college. Highly recommended!",
      name: "Riya Sharma",
      role: "NEET 2022 Topper, AIR 56",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: "2",
      content: "As someone who struggled with complex mathematical concepts, the JEE Advanced Mathematics course provided the clarity I needed. The mentors are incredibly skilled at breaking down difficult topics.",
      name: "Arjun Patel",
      role: "JEE Advanced, AIR 235",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: "3",
      content: "The IIT-M BS introduction course gave me a comprehensive understanding of the program and helped me prepare effectively. The mentorship and community are unmatched!",
      name: "Priya Desai",
      role: "IIT-M BS Data Science Student",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      id: "4",
      content: "Unknown IITians provided me with not just study materials but a complete support system. The mock tests were particularly helpful in building my exam confidence and time management skills.",
      name: "Rahul Singh",
      role: "JEE Mains, AIR 340",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
  ];

  const startAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoplay();
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    } else {
      startAutoplay();
    }
  }, [isPaused]);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground animate-slide-up animate-delay-100">
            Hear from some of our successful students who have achieved their academic goals with our guidance
          </p>
        </div>
        
        <div 
          className="relative" 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <CardCustom 
                    glass 
                    className="p-8 md:p-10 max-w-4xl mx-auto"
                  >
                    <Quote className="h-12 w-12 text-primary/30 mb-4" />
                    <blockquote className="text-lg md:text-xl mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardCustom>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "w-8 bg-primary" 
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
