
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JobListingCard } from "@/components/career/JobListingCard";
import { CardCustom, CardContent, CardHeader, CardTitle } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { Search, SendHorizontal } from "lucide-react";
import { toast } from "sonner";

const jobListings = [
  {
    title: "Content Developer (Computer Science)",
    department: "Content Development",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for a Computer Science Content Developer to create high-quality educational content for our platform. This role involves developing lessons, practice problems, and educational materials.",
    requirements: [
      "Bachelor's or higher degree in Computer Science or related field",
      "Strong understanding of data structures, algorithms, and programming concepts",
      "Excellent written communication skills",
      "Experience in teaching or content creation is a plus"
    ],
    responsibilities: [
      "Develop comprehensive learning materials for Computer Science topics",
      "Create engaging practice problems and coding exercises",
      "Review and improve existing content",
      "Collaborate with the education team to align content with curriculum standards"
    ],
    postedDate: "April 20, 2025"
  },
  {
    title: "Mathematics Content Writer",
    department: "Content Development",
    location: "Remote",
    type: "Part-time",
    description: "Join our team as a Mathematics Content Writer to help create engaging learning materials for students preparing for competitive exams. You'll be responsible for developing clear and concise content.",
    requirements: [
      "Bachelor's or higher degree in Mathematics or related field",
      "Strong understanding of mathematics concepts across algebra, calculus, and geometry",
      "Excellent written communication skills",
      "Experience in teaching or tutoring is preferred"
    ],
    responsibilities: [
      "Create clear and engaging mathematics lessons and explanations",
      "Develop practice problems with detailed solutions",
      "Review and improve existing mathematics content",
      "Ensure content meets academic standards and is conceptually accurate"
    ],
    postedDate: "April 18, 2025"
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Hybrid (Bengaluru)",
    type: "Full-time",
    description: "We're seeking a skilled Frontend Developer to help build and improve our educational platform. You'll work with our engineering team to create intuitive and responsive user interfaces.",
    requirements: [
      "Experience with React and modern JavaScript",
      "Strong understanding of HTML, CSS, and responsive design",
      "Experience with state management and frontend architecture",
      "Knowledge of TypeScript is a plus"
    ],
    responsibilities: [
      "Develop and maintain frontend components and features",
      "Collaborate with designers to implement UI/UX improvements",
      "Optimize application for performance and responsiveness",
      "Write clean, maintainable code with appropriate documentation"
    ],
    postedDate: "April 15, 2025"
  }
];

const JobsCareer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  
  const filteredJobs = jobListings.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    toast.success("You've successfully subscribed to job alerts!");
    setEmail("");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up">
                Careers at Unknown IITians
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-up animate-delay-100">
                Join our team and help shape the future of education
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-slide-up animate-delay-200">
                <ButtonCustom>View Open Positions</ButtonCustom>
                <ButtonCustom variant="outline">Learn About Our Culture</ButtonCustom>
              </div>
            </div>
          </div>
        </section>
        
        {/* Search and Filter Section */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  className="pl-10"
                  placeholder="Search for positions, departments, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Job Listings */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Open Positions
              </h2>
              <p className="text-muted-foreground mb-8">
                Discover your next career opportunity with us
              </p>
              
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <JobListingCard key={index} {...job} />
                ))
              ) : (
                <div className="text-center py-12 bg-secondary/20 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No positions found</h3>
                  <p className="text-muted-foreground">
                    We couldn't find any positions matching your search criteria. Try adjusting your search terms.
                  </p>
                </div>
              )}
              
              <CardCustom glass className="mt-12">
                <CardHeader>
                  <CardTitle>Job Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Don't see a position that matches your skills? Subscribe to our job alerts and be the first to know when new positions open up.
                  </p>
                  
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1"
                    />
                    <ButtonCustom 
                      type="submit" 
                      icon={<SendHorizontal className="h-4 w-4" />} 
                      iconPosition="right"
                    >
                      Subscribe
                    </ButtonCustom>
                  </form>
                </CardContent>
              </CardCustom>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobsCareer;
