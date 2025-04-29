
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CardCustom, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Layers, Send } from "lucide-react";
import { toast } from "sonner";

// Added a preview of current job openings
const featuredJobs = [
  {
    title: "Content Developer (Computer Science)",
    department: "Content Development",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Mathematics Content Writer",
    department: "Content Development",
    location: "Remote",
    type: "Part-time"
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Hybrid (Bengaluru)",
    type: "Full-time"
  }
];

const Career = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  
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
    
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to hiring updates!");
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up">Career</h1>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-up animate-delay-100">
                Rooted in Opportunity, Built for success
              </p>
            </div>
          </div>
        </section>
        
        {/* Current Job Openings Section - ADDED */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Current Openings
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join our team and help shape the future of education
                </p>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {featuredJobs.map((job, index) => (
                  <CardCustom key={index} hover className="h-full">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-2">{job.title}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <BriefcaseBusiness className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{job.location} • {job.type}</span>
                        </div>
                      </div>
                      <Link to="/jobs" className="text-primary hover:underline text-sm font-medium">
                        View details →
                      </Link>
                    </CardContent>
                  </CardCustom>
                ))}
              </div>
              
              <div className="flex justify-center">
                <Link to="/jobs">
                  <ButtonCustom>View All Openings</ButtonCustom>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
                Join UI
              </h2>
              <p className="text-lg font-medium animate-slide-up animate-delay-100">
                Start your career with us!
              </p>
            </div>
            
            <CardCustom glass className="mb-12 animate-slide-up animate-delay-200">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  Unknown IITians is a platform dedicated to providing high-quality educational content to help students and freshers succeed in their careers. We also offer opportunities for internships and hiring positions directly through our platform. All hirings for Unknown IITians will be posted here, with notifications sent out to those who have filled out the required forms.
                </p>
                
                <p className="mb-6">
                  Once you complete the form, you will receive an email with further details about the interview process and the next steps. Our goal is to help you gain practical experience, develop your skills, and build a strong foundation for your future career.
                </p>
                
                <form onSubmit={handleSubscribe} className="mt-8">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-medium mb-2">Enter your email for updates on hirings</h3>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1"
                    />
                    <ButtonCustom 
                      type="submit" 
                      icon={<Send className="h-4 w-4" />} 
                      iconPosition="right"
                      isLoading={isSubscribing}
                      loadingText="Subscribing..."
                    >
                      Subscribe
                    </ButtonCustom>
                  </div>
                </form>
              </CardContent>
            </CardCustom>
            
            {/* Why work with us */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-up">
                  Why work at Unknown IITians
                </h2>
                <p className="text-lg font-medium animate-slide-up animate-delay-100">
                  Earn Today, Build Tomorrow, Succeed Forever
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "A Platform for Growth",
                    description: "Our company is built on helping individuals discover and unlock their full potential. Working with us means you'll be part of a community that values personal development, career advancement, and success.",
                    icon: <GraduationCap className="h-10 w-10" />
                  },
                  {
                    title: "Earn While You Learn",
                    description: "College students often look for ways to manage their expenses, and our internships offer the perfect solution. You can earn money while gaining hands-on experience and making progress toward your career goals.",
                    icon: <BriefcaseBusiness className="h-10 w-10" />
                  },
                  {
                    title: "No Middlemen – Direct Access to Opportunities",
                    description: "At Unknown IITians, we don't act as a mediator. You get direct access to internship openings based on your skills and interests. If you have the required skills, you can join and begin your journey without delays.",
                    icon: <ArrowRight className="h-10 w-10" />
                  },
                  {
                    title: "A Stepping Stone to Success",
                    description: "An internship with Unknown IITians is more than just a learning experience; it's a chance to set the foundation for your future career. You'll gain insights into the industry, develop a strong work ethic, and build a network that can help you land your dream job after college.",
                    icon: <Layers className="h-10 w-10" />
                  }
                ].map((item, index) => (
                  <CardCustom 
                    key={item.title}
                    className="animate-slide-up"
                    style={{ animationDelay: `${(index * 100) + 300}ms` }}
                  >
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                  </CardCustom>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {[
                  {
                    title: "No Experience? No Problem!",
                    description: "You don't need to have extensive experience to get started. We welcome students with basic skills who are eager to learn and grow. The internships we offer are a perfect starting point to build your knowledge and abilities in a professional setting."
                  },
                  {
                    title: "Work on Paid Opportunities After Training",
                    description: "Once you've completed the training and feel confident in your abilities, you can directly apply for paid internships and roles. Unknown IITians helps bridge the gap between learning and earning, ensuring that you can apply your skills in real, paid work environments."
                  }
                ].map((item, index) => (
                  <CardCustom 
                    key={item.title}
                    className="animate-slide-up"
                    style={{ animationDelay: `${(index * 100) + 700}ms` }}
                  >
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                    </CardContent>
                  </CardCustom>
                ))}
              </div>
            </div>
            
            {/* How we make change */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  How do we make remarkable change?
                </h2>
              </div>
              
              <CardCustom glass className="animate-slide-up">
                <CardContent className="py-6">
                  <p className="text-lg leading-relaxed">
                    Unknown IITians creates remarkable change in the educational field by offering students the opportunity to earn while they learn. We provide skill-building resources, paid internships, and real-world experiences that empower students to develop their potential, gain practical knowledge, and support themselves financially. Through mentorship and hands-on training, we bridge the gap between education and career success, helping students thrive in both their personal and professional lives.
                  </p>
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

export default Career;
