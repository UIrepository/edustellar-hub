
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CardCustom, CardContent, CardHeader, CardTitle } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { BriefcaseBusiness, Check, Search, UserCheck, X } from "lucide-react";
import { toast } from "sonner";

type VerificationStatus = "idle" | "loading" | "success" | "error";

const EmployeeVerification = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [employeeData, setEmployeeData] = useState<null | {
    name: string;
    position: string;
    duration: string;
    isVerified: boolean;
  }>(null);
  
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!employeeId.trim() || !email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setStatus("loading");
    
    // Simulate API call to verify employee
    setTimeout(() => {
      // Mock response - In a real app, this would be from your backend
      if (employeeId === "UI123" && email === "test@example.com") {
        setEmployeeData({
          name: "John Doe",
          position: "Content Developer",
          duration: "June 2023 - March 2025",
          isVerified: true
        });
        setStatus("success");
        toast.success("Employee verified successfully!");
      } else {
        setEmployeeData(null);
        setStatus("error");
        toast.error("No employee record found with those credentials");
      }
    }, 1500);
  };
  
  const resetForm = () => {
    setEmployeeId("");
    setEmail("");
    setEmployeeData(null);
    setStatus("idle");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up">
                Employee Verification Portal
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-up animate-delay-100">
                Verify employment history at Unknown IITians
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <CardCustom glass className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BriefcaseBusiness className="h-6 w-6" />
                  Employment Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">
                  This verification portal allows current and former employees to verify their employment history 
                  with Unknown IITians. Enter your employee ID and registered email address to get started.
                </p>
                
                {status !== "success" ? (
                  <form onSubmit={handleVerify} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="employee-id" className="text-sm font-medium">
                          Employee ID
                        </label>
                        <Input 
                          id="employee-id"
                          value={employeeId}
                          onChange={(e) => setEmployeeId(e.target.value)}
                          placeholder="Enter your employee ID (e.g. UI123)"
                          disabled={status === "loading"}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input 
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your registered email"
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ButtonCustom 
                        type="submit" 
                        isLoading={status === "loading"}
                        loadingText="Verifying..."
                        icon={<Search className="h-4 w-4" />}
                        iconPosition="left"
                      >
                        Verify Employment
                      </ButtonCustom>
                    </div>
                    
                    {status === "error" && (
                      <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-start gap-3">
                        <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Verification Failed</p>
                          <p className="text-sm">We could not find an employee record matching these details. Please check your information and try again.</p>
                        </div>
                      </div>
                    )}
                  </form>
                ) : (
                  <div className="space-y-8">
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium">Verified</h3>
                        <p className="text-muted-foreground">Employment record found</p>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <h4 className="text-lg font-medium mb-4">Employee Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Name</p>
                          <p className="font-medium">{employeeData?.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Position</p>
                          <p className="font-medium">{employeeData?.position}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Employment Period</p>
                          <p className="font-medium">{employeeData?.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Status</p>
                          <p className="font-medium">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Verified
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ButtonCustom onClick={resetForm} variant="outline">
                        Verify Another Employee
                      </ButtonCustom>
                    </div>
                  </div>
                )}
              </CardContent>
            </CardCustom>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">For Employers & Background Check Companies</h3>
              <p className="mb-4 text-muted-foreground">
                If you are an employer or background check company and need to verify someone's employment history with Unknown IITians, 
                please use the form above or contact our HR department directly.
              </p>
              <ButtonCustom variant="outline" size="sm">Contact HR Department</ButtonCustom>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmployeeVerification;
