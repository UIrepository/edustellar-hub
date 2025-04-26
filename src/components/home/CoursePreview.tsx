import React, { useState } from "react";
import { CardCustom, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Clock, Users, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  duration: string;
  students: number;
  lessons: number;
  free: boolean;
  featured?: boolean;
  index?: number;
  price?: number;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RAZORPAY_KEY_ID = "rzp_live_vaLIiJidPPfFlr";

const loadRazorpayScript = (): Promise<void> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
};

const CourseCard = ({
  id,
  title,
  description,
  category,
  image,
  duration,
  students,
  lessons,
  free,
  featured = false,
  index = 0,
  price,
}: CourseCardProps) => {
  const { toast } = useToast();
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const handleEnrollNow = async () => {
    try {
      setIsPaymentLoading(true);
      await loadRazorpayScript();
      
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: price ? price * 100 : 100, // Convert to paise (Rs. 1 = 100 paise)
        currency: "INR",
        name: title,
        description: "Course enrollment fee",
        image: image,
        handler: function (response: any) {
          toast({
            title: "Payment Successful",
            description: `Payment ID: ${response.razorpay_payment_id}`,
            variant: "success"
          });
        },
        prefill: {
          name: "",
          email: "",
        },
        theme: {
          color: "#6366f1",
        },
        modal: {
          ondismiss: function () {
            setIsPaymentLoading(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        toast({
          title: "Payment Failed",
          description: response.error.description || "Something went wrong",
          variant: "destructive"
        });
        setIsPaymentLoading(false);
      });
      
      rzp.open();
    } catch (error) {
      console.error("Payment initialization error:", error);
      toast({
        title: "Error",
        description: "Failed to initialize payment",
        variant: "destructive"
      });
      setIsPaymentLoading(false);
    }
  };

  return (
    <CardCustom
      glass
      hover
      clickable
      className={cn(
        "overflow-hidden group",
        featured ? "border-primary/50" : "",
        "animate-slide-up",
        `animate-delay-${Math.min(index * 100, 500)}`
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full">
          {category}
        </div>
        {featured && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
            Featured
          </div>
        )}
        {free && (
          <div className="absolute bottom-4 left-4 bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            Free
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{lessons} lessons</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        {!free ? (
          <ButtonCustom
            fullWidth
            variant="primary"
            onClick={handleEnrollNow}
            isLoading={isPaymentLoading}
            loadingText="Loading…"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Enroll Now
          </ButtonCustom>
        ) : (
          <Link to={`/courses/${id}`} className="w-full">
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

const CoursePreview = () => {
  const featuredCourses = [
    {
      id: "neet-crash-course",
      title: "NEET Crash Course 2023",
      description: "Comprehensive preparation for NEET with focus on high-yield topics and practice questions.",
      category: "NEET",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      duration: "12 weeks",
      students: 5240,
      lessons: 48,
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
      free: false,
      featured: true
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-slide-up">Featured Courses</h2>
            <p className="text-muted-foreground animate-slide-up animate-delay-100">
              Explore our most popular courses designed to help you excel in competitive exams
            </p>
          </div>
          <Link to="/courses" className="animate-slide-up animate-delay-200">
            <ButtonCustom variant="outline" icon={<ArrowRight />} iconPosition="right">
              View All Courses
            </ButtonCustom>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.id} {...course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
