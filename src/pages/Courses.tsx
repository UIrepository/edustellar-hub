import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CardCustom, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Clock, Users, BookOpen, Search, X, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { initializeQRPayment, getCoursePrice } from "@/utils/payment";

const coursesData = [
  // Sample course data - to be replaced with API calls in final implementation
  {
    id: "neet-crash-course",
    title: "NEET Crash Course 2023",
    description: "Comprehensive preparation for NEET with focus on high-yield topics and practice questions.",
    category: "NEET",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    duration: "12 weeks",
    students: 5240,
    lessons: 48,
    free: false,
    featured: true
  },
  {
    id: "jee-advanced-math",
    title: "JEE Advanced Mathematics",
    description: "Master complex mathematical concepts and problem-solving techniques for JEE Advanced.",
    category: "JEE",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    duration: "16 weeks",
    students: 3890,
    lessons: 64,
    free: false
  },
  {
    id: "iitm-bs-intro",
    title: "Introduction to IIT-M BS Program",
    description: "Overview of the IIT Madras BS Degree programs in Data Science and Electronic Systems.",
    category: "IIT-M BS",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    duration: "4 weeks",
    students: 7650,
    lessons: 16,
    free: true
  },
  {
    id: "neet-biology",
    title: "NEET Biology Foundation",
    description: "Strengthen your understanding of core biological concepts for NEET examination.",
    category: "NEET",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    duration: "10 weeks",
    students: 4120,
    lessons: 40,
    free: false
  },
  {
    id: "jee-physics",
    title: "JEE Physics Mastery",
    description: "Complete physics preparation with a focus on problem-solving and conceptual clarity.",
    category: "JEE",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    duration: "14 weeks",
    students: 3250,
    lessons: 56,
    free: false
  },
  {
    id: "iitm-bs-data-science",
    title: "Data Science Essentials for IIT-M BS",
    description: "Key data science concepts and tools required for the IIT Madras BS program.",
    category: "IIT-M BS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    duration: "8 weeks",
    students: 2980,
    lessons: 32,
    free: false
  },
  {
    id: "neet-chemistry",
    title: "NEET Chemistry Complete Guide",
    description: "Comprehensive coverage of organic, inorganic, and physical chemistry for NEET.",
    category: "NEET",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    duration: "12 weeks",
    students: 4560,
    lessons: 48,
    free: false,
    featured: true
  },
  {
    id: "jee-chemistry",
    title: "JEE Chemistry Foundation",
    description: "Build a strong foundation in chemistry concepts required for JEE examinations.",
    category: "JEE",
    image: "https://images.unsplash.com/photo-1616969765650-d6aaef0a6287?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    duration: "10 weeks",
    students: 3780,
    lessons: 40,
    free: true
  },
];

interface CourseCardProps {
  course: typeof coursesData[0];
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const { toast } = useToast();

  const handlePayment = async () => {
    try {
      await initializeQRPayment({
        amount: getCoursePrice(course.id),
        description: `Payment for ${course.title}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not initialize payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <CardCustom
      key={course.id}
      glass
      hover
      clickable
      className={cn(
        "overflow-hidden group",
        course.featured ? "border-primary/50" : "",
        `animate-slide-up animate-delay-${Math.min(index * 100, 500)}`
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full">
          {course.category}
        </div>
        {course.featured && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
            Featured
          </div>
        )}
        {course.free && (
          <div className="absolute bottom-4 left-4 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            Free
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-1">{course.title}</CardTitle>
        <CardDescription className="line-clamp-2">{course.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{course.lessons} lessons</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-4">
        {!course.free ? (
          <ButtonCustom
            fullWidth
            variant="primary"
            onClick={handlePayment}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Pay with QR Code
          </ButtonCustom>
        ) : (
          <Link to={`/courses/${course.id}`} className="w-full">
            <ButtonCustom
              fullWidth
              icon={<ArrowRight />}
              iconPosition="right"
              variant="primary"
              className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Learning
            </ButtonCustom>
          </Link>
        )}
      </CardFooter>
    </CardCustom>
  );
};

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
                         
    const matchesCategory = categoryFilter ? course.category === categoryFilter : true;
    
    const matchesFreeFilter = showFreeOnly ? course.free : true;
    
    return matchesSearch && matchesCategory && matchesFreeFilter;
  });
  
  const categories = ["NEET", "JEE", "IIT-M BS"];
  
  const resetFilters = () => {
    setSearchTerm("");
    setCategoryFilter(null);
    setShowFreeOnly(false);
  };
  
  const hasActiveFilters = searchTerm || categoryFilter || showFreeOnly;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="bg-secondary/30">
          <div className="container mx-auto py-12 px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                Explore Our Courses
              </h1>
              <p className="text-lg text-muted-foreground animate-slide-up animate-delay-100">
                Browse our collection of specialized courses designed to help you excel in NEET, JEE, and IIT-M BS programs
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              {searchTerm && (
                <button
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <ButtonCustom
                  key={category}
                  variant={categoryFilter === category ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setCategoryFilter(categoryFilter === category ? null : category)}
                >
                  {category}
                </ButtonCustom>
              ))}
              
              <ButtonCustom
                variant={showFreeOnly ? "primary" : "outline"}
                size="sm"
                onClick={() => setShowFreeOnly(!showFreeOnly)}
              >
                Free Courses
              </ButtonCustom>
              
              {hasActiveFilters && (
                <ButtonCustom
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                >
                  Reset Filters
                </ButtonCustom>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Filters:</span>
            
            {searchTerm && (
              <div className="bg-primary/10 text-primary rounded-full px-3 py-1">
                Search: "{searchTerm}"
              </div>
            )}
            
            {categoryFilter && (
              <div className="bg-primary/10 text-primary rounded-full px-3 py-1">
                Category: {categoryFilter}
              </div>
            )}
            
            {showFreeOnly && (
              <div className="bg-primary/10 text-primary rounded-full px-3 py-1">
                Free Courses Only
              </div>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6">
            Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
          </p>
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No courses found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <ButtonCustom onClick={resetFilters}>
                Reset Filters
              </ButtonCustom>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
