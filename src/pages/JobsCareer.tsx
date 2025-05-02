
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JobListingCard } from "@/components/career/JobListingCard";
import { CardCustom, CardContent, CardHeader, CardTitle } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { Search, SendHorizontal, Briefcase, MapPin, PenSquare, Users } from "lucide-react";
import { toast } from "sonner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
  const [departmentFilter, setDepartmentFilter] = useState<string | null>(null);
  
  const departments = [...new Set(jobListings.map(job => job.department))];
  
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = departmentFilter ? job.department === departmentFilter : true;
    
    return matchesSearch && matchesDepartment;
  });
  
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
        <section className="bg-gradient-to-br from-secondary/40 to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 animate-slide-up">
                Careers at Unknown IITians
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-up animate-delay-100">
                Join our team and help shape the future of education
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-slide-up animate-delay-200">
                <ButtonCustom className="bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  View Open Positions
                </ButtonCustom>
                <ButtonCustom variant="outline" className="border-primary/30 hover:bg-primary/5 transition-all duration-300">
                  Learn About Our Culture
                </ButtonCustom>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 bg-background border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Open Positions", value: jobListings.length, icon: <Briefcase className="h-8 w-8 text-primary opacity-80" /> },
                { label: "Locations", value: "4+", icon: <MapPin className="h-8 w-8 text-primary opacity-80" /> },
                { label: "Team Members", value: "50+", icon: <Users className="h-8 w-8 text-primary opacity-80" /> },
                { label: "Applications", value: "1000+", icon: <PenSquare className="h-8 w-8 text-primary opacity-80" /> }
              ].map((stat, index) => (
                <CardCustom 
                  key={index} 
                  className="text-center py-6 border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0 flex flex-col items-center">
                    <div className="mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </CardContent>
                </CardCustom>
              ))}
            </div>
          </div>
        </section>
        
        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    className="pl-10"
                    placeholder="Search for positions, departments, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <ToggleGroup type="single" value={departmentFilter || ""} onValueChange={(value) => setDepartmentFilter(value || null)}>
                  {departments.map(dept => (
                    <ToggleGroupItem 
                      key={dept} 
                      value={dept}
                      aria-label={`Filter by ${dept}`}
                      className="text-sm"
                    >
                      {dept}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Showing {filteredJobs.length} open {filteredJobs.length === 1 ? 'position' : 'positions'}
                {departmentFilter && <span> in {departmentFilter}</span>}
              </p>
            </div>
          </div>
        </section>
        
        {/* Job Listings */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center md:text-left">
                Open Positions
              </h2>
              <p className="text-muted-foreground mb-8 text-center md:text-left">
                Discover your next career opportunity with us
              </p>
              
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <JobListingCard 
                    key={index} 
                    {...job} 
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-secondary/20 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No positions found</h3>
                  <p className="text-muted-foreground">
                    We couldn't find any positions matching your search criteria. Try adjusting your search terms.
                  </p>
                </div>
              )}
              
              <CardCustom glass className="mt-12 border border-primary/20 bg-background/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Job Alerts <SendHorizontal className="h-5 w-5 text-primary" />
                  </CardTitle>
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
                      className="bg-gradient-to-r from-primary to-purple-600 text-white shadow hover:shadow-md transition-all duration-300"
                    >
                      Subscribe
                    </ButtonCustom>
                  </form>
                </CardContent>
              </CardCustom>
            </div>
          </div>
        </section>
        
        {/* Why Join Us */}
        <section className="py-16 bg-gradient-to-br from-secondary/30 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Join Our Team?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  At Unknown IITians, we're building the future of education technology. Here's why you should be part of our journey.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Growth & Learning",
                    description: "Continuous learning opportunities and clear career advancement paths for all team members.",
                    icon: <Briefcase className="h-8 w-8 text-primary" />
                  },
                  {
                    title: "Impact at Scale",
                    description: "Help thousands of students achieve their academic goals and unlock their potential.",
                    icon: <Users className="h-8 w-8 text-primary" />
                  },
                  {
                    title: "Innovation Focus",
                    description: "Work on cutting-edge education technology that's transforming how students learn.",
                    icon: <PenSquare className="h-8 w-8 text-primary" />
                  }
                ].map((benefit, index) => (
                  <CardCustom key={index} className="text-center p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                    <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardCustom>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobsCareer;
