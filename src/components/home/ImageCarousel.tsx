
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Link } from "react-router-dom";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

// In a real app, these would come from an API or CMS
const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    alt: "Student studying with laptop",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    alt: "Student using laptop for coding",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
    alt: "Student studying online",
  },
];

const ImageCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full bg-blue-50/50 pb-32">
      <Carousel className="w-full max-w-7xl mx-auto" setApi={setApi}>
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.id} className="md:basis-full">
              <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-xl">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index ? "w-8 bg-primary" : "w-2 bg-primary/50"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
      
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-start">
            <div className="bg-white py-2 px-4 rounded-full text-sm font-medium text-primary shadow-sm mb-4 animate-fade-in">
              Your Path to Success
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-slide-up animate-delay-200">
              Student's Most Trusted Educational Website
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mb-8 animate-slide-up animate-delay-300">
              Expert-led courses, career guidance, and exam preparation resources 
              designed specifically for engineering aspirants and students.
            </p>
            
            <Link to="/courses" className="animate-slide-up animate-delay-400">
              <ButtonCustom 
                size="lg" 
                className="bg-black hover:bg-black/90 text-white rounded-lg px-8 py-3 shadow-md hover:shadow-lg flex items-center gap-2 transition-all duration-300"
              >
                Explore Courses
                <ArrowRight className="h-5 w-5" />
              </ButtonCustom>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
