
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardCustom, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Eye, EyeOff, UserPlus, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [examType, setExamType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const examTypes = [
    { value: "neet", label: "NEET" },
    { value: "jee", label: "JEE" },
    { value: "iitm-bs-ds", label: "IIT-M BS (Data Science)" },
    { value: "iitm-bs-es", label: "IIT-M BS (Electronic Systems)" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !examType) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulating registration request
    try {
      // This will be replaced with actual registration logic
      setTimeout(() => {
        // Success scenario for demo
        toast({
          title: "Registration successful",
          description: "Your account has been created!",
        });
        navigate("/");
      }, 1500);
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "There was an error creating your account",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-secondary/30">
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <Link to="/">
          <ButtonCustom variant="ghost" size="sm" icon={<ArrowLeft />} iconPosition="left">
            Back to Home
          </ButtonCustom>
        </Link>
      </div>
      
      <div className="w-full max-w-md animate-scale-in">
        <CardCustom glass className="border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
            <CardDescription className="text-center">
              Enter your details to create your account
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters long
                </p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="examType" className="text-sm font-medium">
                  Which exam/program are you preparing for?
                </label>
                <select
                  id="examType"
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  required
                >
                  <option value="" disabled>Select an option</option>
                  {examTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  className="rounded text-primary focus:ring-primary"
                  required
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link 
                    to="/terms" 
                    className="text-primary hover:underline font-medium"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link 
                    to="/privacy" 
                    className="text-primary hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <ButtonCustom 
                type="submit" 
                fullWidth 
                isLoading={isLoading}
                icon={<UserPlus />}
                iconPosition="right"
              >
                Sign Up
              </ButtonCustom>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <ButtonCustom variant="outline" type="button" fullWidth>
                  Google
                </ButtonCustom>
                <ButtonCustom variant="outline" type="button" fullWidth>
                  GitHub
                </ButtonCustom>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </CardCustom>
      </div>
    </div>
  );
};

export default Register;
