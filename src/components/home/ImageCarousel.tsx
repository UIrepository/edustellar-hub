
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "@/components/ui/button-custom";
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
  return (
    <div className="relative w-full">
      <Carousel className="w-full max-w-7xl mx-auto">
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.id} className="md:basis-full">
              <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-xl">
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
      </Carousel>
      
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <h2 className="text-white text-2xl md:text-4xl font-bold max-w-3xl mx-auto px-4">
          Student's Most Trusted Educational Website – Ignite Your Passion, Shape Your Future with Education!
        </h2>
      </div>
    </div>
  );
};

export default ImageCarousel;
