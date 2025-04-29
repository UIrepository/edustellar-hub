
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AdminProvider } from "@/context/AdminContext";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import InternVerification from "./pages/InternVerification";
import Career from "./pages/Career";
import JobsCareer from "./pages/JobsCareer"; // Added new JobsCareer page
import EmployeeVerification from "./pages/EmployeeVerification"; // Added new EmployeeVerification page
import Partnerships from "./pages/Partnerships";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ComingSoon from "./pages/ComingSoon";
import UnderMaintenance from "./pages/UnderMaintenance";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import NEET from "./pages/NEET";
import JEE from "./pages/JEE";
import IITMBS from "./pages/IITMBS";
import { SubjectPage } from "@/components/iitmbs/SubjectPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AdminProvider>
      <ThemeProvider defaultTheme="system">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/intern-verification" element={<InternVerification />} />
              <Route path="/career" element={<Career />} />
              <Route path="/jobs" element={<JobsCareer />} /> {/* Added new route */}
              <Route path="/employee-verification" element={<EmployeeVerification />} /> {/* Added new route */}
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              <Route path="/maintenance" element={<UnderMaintenance />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              
              <Route path="/iitm-bs" element={<IITMBS />} />
              <Route path="/iitm-bs/subjects/:subjectId" element={<SubjectPage />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </AdminProvider>
  </QueryClientProvider>
);

export default App;
