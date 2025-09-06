import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  content: string;
  name: string;
  role: string;
  image: string;
}

const CoursePageTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      content: "Cracking the IIT-M Qualifier exam felt impossible until I joined Unknown IITians. The mentorship was top-notch, and the teachers provided incredible support. The quality of the material is unparalleled. Truly grateful for the guidance!",
      name: "Sameer Verma",
      role: "IIT-M BS Qualifier Cleared",
      image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      id: "2",
      content: "The Foundation level courses at UI are exceptional. The live classes were interactive and cleared all my doubts instantly. The teacher support is phenomenal, making even the toughest subjects easy to understand and master.",
      name: "Anjali Mehta",
      role: "Foundation Level Student",
      image: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      id: "3",
      content: "The quality of teaching at Unknown IITians is simply the best. The personalized teacher support during my JEE prep course helped me build a strong foundation and boost my confidence. I couldn't have done it without them.",
      name: "Karan Singh",
      role: "JEE Aspirant",
      image: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: "4",
      content: "From the Qualifier to the Foundation courses, UI delivers on every promise. The live classes, constant mentorship, and amazing teacher support create a high-quality learning environment that guarantees success.",
      name: "Sneha Reddy",
      role: "NEET Aspirant",
      image: "https://randomuser.me/api/portraits/women/8.jpg"
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
    <section className="py-12 md:py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground animate-fade-in">
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
                  <Card
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
                  </Card>
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

export default CoursePageTestimonials;
