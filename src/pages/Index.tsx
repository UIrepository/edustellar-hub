
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ImageCarousel from "@/components/home/ImageCarousel";
import CoursePreview from "@/components/home/CoursePreview";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import Hero from "@/components/home/Hero";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Book, PenTool, Layers, BookOpen, FileText, Laptop } from "lucide-react";
import { CardCustom, CardContent } from "@/components/ui/card-custom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        
        {/* Course Categories */}
        <section className="section-padding bg-blue-50/30">
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
        
        {/* Statistics */}
        <Statistics />
        
        {/* Study Resources Overview */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
                Your Study Resources Hub
              </h2>
              <p className="text-muted-foreground animate-slide-up animate-delay-100">
                Quick access to high-quality, student-tested content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Notes",
                  description: "Well-structured handwritten and curated digital notes for exam prep",
                  icon: <FileText className="h-8 w-8" />
                },
                {
                  title: "Lectures",
                  description: "Expert-led videos, recorded lectures, and playlist previews",
                  icon: <Laptop className="h-8 w-8" />
                },
                {
                  title: "Skill Enhancers",
                  description: "Interactive quizzes, strategy guides, and productivity boosters",
                  icon: <Layers className="h-8 w-8" />
                }
              ].map((resource, index) => (
                <CardCustom 
                  key={resource.title}
                  glass
                  hover
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-primary/10 text-primary h-16 w-16 rounded-lg flex items-center justify-center mb-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </CardCustom>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Initiatives */}
        <section className="section-padding bg-blue-50/30">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
                What We Build for You
              </h2>
            </div>
            
            <div className="flex overflow-x-auto py-4 scrollbar-none gap-8 pb-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div 
                  key={item}
                  className="flex-shrink-0 w-40 h-40 rounded-xl bg-white shadow-md flex items-center justify-center p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">Initiative {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* YouTube Showcase */}
        <section className="section-padding bg-blue-50/30">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
                Watch and Learn
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((video) => (
                <div 
                  key={video} 
                  className="relative rounded-xl overflow-hidden aspect-video bg-gray-100 hover:scale-[1.02] transition-transform duration-300 group cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-16 w-16 rounded-full bg-white/80 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-primary border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-medium">Educational Video {video}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Link to="/courses">
                <ButtonCustom>View All Videos</ButtonCustom>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Courses */}
        <CoursePreview />
        
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
