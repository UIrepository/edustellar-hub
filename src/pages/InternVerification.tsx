
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CardCustom, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card-custom";
import { Input } from "@/components/ui/input";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Search, CheckCircle, XCircle, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

// Mock data for demonstration - in a real app, this would come from a secure database
const internData = [
  { 
    id: "INT001", 
    name: "Rahul Sharma", 
    email: "rahul.s@example.com", 
    role: "Content Development Intern", 
    department: "NEET Resources", 
    startDate: "2023-06-15", 
    endDate: "2023-12-15", 
    status: "active" 
  },
  { 
    id: "INT002", 
    name: "Priya Patel", 
    email: "priya.p@example.com", 
    role: "Technical Content Intern", 
    department: "JEE Resources", 
    startDate: "2023-07-01", 
    endDate: "2024-01-01", 
    status: "active" 
  },
  { 
    id: "INT003", 
    name: "Amit Kumar", 
    email: "amit.k@example.com", 
    role: "Web Development Intern", 
    department: "Technical Team", 
    startDate: "2023-05-10", 
    endDate: "2023-11-10", 
    status: "completed" 
  }
];

const InternVerification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<typeof internData | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      toast.error("Please enter a name, email or ID to search");
      return;
    }
    
    setIsSearching(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const results = internData.filter(intern => 
        intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        intern.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        intern.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(false);
      
      if (results.length === 0) {
        toast.error("No matching records found");
      }
    }, 800);
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "completed":
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      default:
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
              Intern Verification Portal
            </h1>
            
            <CardCustom glass className="mb-8 animate-slide-up animate-delay-100">
              <CardHeader>
                <CardTitle>Verify an Intern with Unknown IITians</CardTitle>
                <CardDescription>
                  To verify an intern's association, enter their name, email, or ID below
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="Search by name, email or ID"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                      }}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                  
                  <ButtonCustom 
                    onClick={handleSearch} 
                    isLoading={isSearching}
                    loadingText="Searching..."
                  >
                    Verify
                  </ButtonCustom>
                </div>
              </CardContent>
              
              {searchResults && searchResults.length > 0 && (
                <CardContent className="pt-0">
                  <div className="mt-4 divide-y">
                    {searchResults.map((intern) => (
                      <div key={intern.id} className="py-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium">{intern.name}</h3>
                            <p className="text-sm text-muted-foreground">{intern.email}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{intern.status === "active" ? "Active" : "Completed"}</span>
                            {getStatusIcon(intern.status)}
                          </div>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Intern ID</div>
                            <div className="font-medium">{intern.id}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Role</div>
                            <div className="font-medium">{intern.role}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Department</div>
                            <div className="font-medium">{intern.department}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Duration</div>
                            <div className="font-medium">
                              {new Date(intern.startDate).toLocaleDateString()} - 
                              {intern.status === "active" ? " Present" : ` ${new Date(intern.endDate).toLocaleDateString()}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
              
              <CardFooter className="flex-col items-start text-sm text-muted-foreground">
                <p>
                  For assistance, contact our support team at{" "}
                  <a href="mailto:help.unknowniitians@gmail.com" className="text-primary underline">
                    help.unknowniitians@gmail.com
                  </a>
                </p>
              </CardFooter>
            </CardCustom>
            
            <CardCustom className="animate-slide-up animate-delay-200">
              <CardHeader>
                <CardTitle>FAQ - Intern Verification Portal</CardTitle>
              </CardHeader>
              
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "What is the Intern Verification Portal?",
                      answer: "A secure platform to verify roles and identities at Unknown IITians."
                    },
                    {
                      question: "How secure is the Intern Verification Portal?",
                      answer: "Highly secure; only authorized personnel can access records."
                    },
                    {
                      question: "How can I become an employee at Unknown IITians?",
                      answer: "Fill out the form: Apply Here."
                    },
                    {
                      question: "Who can verify intern records on the portal?",
                      answer: "Only authorized employees and designated individuals."
                    },
                    {
                      question: "What information is available on the portal?",
                      answer: "Intern roles, verification status, and related details."
                    },
                    {
                      question: "How do I verify my role as an intern or employee?",
                      answer: "Log in to the portal to view and verify your role."
                    },
                    {
                      question: "What if I encounter issues with the portal?",
                      answer: "Contact support at help.unknowniitians@gmail.com."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </CardCustom>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InternVerification;
