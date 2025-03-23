
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ImageCarousel from "@/components/home/ImageCarousel";
import CoursePreview from "@/components/home/CoursePreview";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Book, PenTool } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Image Carousel */}
        <section className="relative overflow-hidden pt-16">
          <ImageCarousel />
        </section>
        
        {/* Course Categories */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
                Explore Our Categories
              </h2>
              <p className="text-muted-foreground animate-slide-up animate-delay-100">
                Specialized resources and courses tailored for different competitive exams and degree programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "NEET",
                  description: "Medical MBBS - Comprehensive preparation for medical entrance exams",
                  icon: <GraduationCap className="h-8 w-8" />,
                  href: "/neet"
                },
                {
                  title: "JEE",
                  description: "Engineering - Expert-led courses for engineering entrance exams",
                  icon: <Book className="h-8 w-8" />,
                  href: "/jee"
                },
                {
                  title: "IIT-M BS",
                  description: "UG - Resources for IIT Madras BS Degree programs",
                  icon: <PenTool className="h-8 w-8" />,
                  href: "/iitm-bs"
                }
              ].map((category, index) => (
                <Link 
                  key={category.title} 
                  to={category.href}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="glass-morphism h-full rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-primary/10 text-primary h-16 w-16 rounded-lg flex items-center justify-center mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <ButtonCustom 
                      variant="outline" 
                      icon={<ArrowRight />} 
                      iconPosition="right"
                    >
                      Explore
                    </ButtonCustom>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Courses */}
        <CoursePreview />
        
        {/* Statistics */}
        <Statistics />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* CTA Section */}
        <section className="section-padding bg-primary/5">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 animate-slide-up animate-delay-100">
                Join thousands of students who have successfully prepared for competitive exams with Unknown IITians
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-200">
                <Link to="/register">
                  <ButtonCustom size="lg">
                    Get Started
                  </ButtonCustom>
                </Link>
                <Link to="/courses">
                  <ButtonCustom variant="outline" size="lg">
                    Browse Courses
                  </ButtonCustom>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
