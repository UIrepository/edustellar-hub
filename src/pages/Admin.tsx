
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAdmin } from "@/context/AdminContext";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Users,
  FileText,
  Image,
  BookOpen,
  MessageSquare,
  Building,
  FileQuestion,
  FileCheck,
  Bell,
  Settings,
  LogOut,
  UploadCloud,
  Save,
  Plus
} from "lucide-react";

// Mock user data for demonstration
const mockUsers = [
  { id: 1, name: "Rahul Sharma", email: "rahul.s@example.com", examType: "NEET", registeredAt: "2023-06-15" },
  { id: 2, name: "Priya Patel", email: "priya.p@example.com", examType: "JEE", registeredAt: "2023-06-20" },
  { id: 3, name: "Amit Kumar", email: "amit.k@example.com", examType: "IIT-M BS", registeredAt: "2023-07-01" },
  { id: 4, name: "Sneha Gupta", email: "sneha.g@example.com", examType: "NEET", registeredAt: "2023-07-05" },
  { id: 5, name: "Vikram Singh", email: "vikram.s@example.com", examType: "JEE", registeredAt: "2023-07-10" }
];

const Admin = () => {
  const { isAdmin, logout } = useAdmin();
  const [activeTab, setActiveTab] = useState("users");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [comingSoonMode, setComingSoonMode] = useState(false);
  
  // If not admin, redirect to login
  if (!isAdmin) {
    return <Navigate to="/login" />;
  }
  
  const handleLogout = () => {
    logout();
    toast.success("Successfully logged out");
  };
  
  const handleMaintenanceToggle = (checked: boolean) => {
    setMaintenanceMode(checked);
    toast.success(`Maintenance mode ${checked ? 'enabled' : 'disabled'}`);
  };
  
  const handleComingSoonToggle = (checked: boolean) => {
    setComingSoonMode(checked);
    toast.success(`Coming Soon mode ${checked ? 'enabled' : 'disabled'}`);
  };
  
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-background border-r border-border hidden md:block">
        <div className="p-6">
          <h1 className="text-xl font-bold mb-8">Admin Dashboard</h1>
          
          <nav className="space-y-1">
            {[
              { id: "users", label: "Users", icon: <Users className="h-4 w-4" /> },
              { id: "content", label: "Content", icon: <FileText className="h-4 w-4" /> },
              { id: "carousel", label: "Carousel", icon: <Image className="h-4 w-4" /> },
              { id: "courses", label: "Courses", icon: <BookOpen className="h-4 w-4" /> },
              { id: "support", label: "Support Tickets", icon: <MessageSquare className="h-4 w-4" /> },
              { id: "partners", label: "Partnerships", icon: <Building className="h-4 w-4" /> },
              { id: "intern", label: "Intern Verification", icon: <FileCheck className="h-4 w-4" /> },
              { id: "career", label: "Career Page", icon: <FileQuestion className="h-4 w-4" /> },
              { id: "notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
              { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> }
            ].map((item) => (
              <button
                key={item.id}
                className={`flex items-center w-full px-4 py-2 text-sm rounded-md transition-colors ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            ))}
            
            <button
              className="flex items-center w-full px-4 py-2 text-sm rounded-md text-red-500 hover:bg-red-500/10 transition-colors mt-8"
              onClick={handleLogout}
            >
              <span className="mr-3"><LogOut className="h-4 w-4" /></span>
              Logout
            </button>
          </nav>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="md:hidden mb-6">
              <TabsList className="w-full">
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="users" className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Registered Users</h2>
                <div className="flex items-center gap-2">
                  <Input placeholder="Search users..." className="w-60" />
                  <ButtonCustom variant="outline" size="sm">Export List</ButtonCustom>
                </div>
              </div>
              
              <CardCustom>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4">Name</th>
                          <th className="text-left p-4">Email</th>
                          <th className="text-left p-4">Exam Type</th>
                          <th className="text-left p-4">Registered On</th>
                          <th className="text-right p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockUsers.map((user) => (
                          <tr key={user.id} className="border-b hover:bg-secondary/50">
                            <td className="p-4">{user.name}</td>
                            <td className="p-4">{user.email}</td>
                            <td className="p-4">{user.examType}</td>
                            <td className="p-4">{user.registeredAt}</td>
                            <td className="p-4 text-right">
                              <ButtonCustom variant="ghost" size="sm">View</ButtonCustom>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </CardCustom>
            </TabsContent>
            
            <TabsContent value="content" className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Content Management</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["NEET Notes", "JEE Notes", "IITM-BS Notes", "Study Guides", "Mock Tests", "Padhai Mitra", "Important News", "Deadlines"].map((contentType) => (
                  <CardCustom key={contentType} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle>{contentType}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ButtonCustom icon={<UploadCloud className="h-4 w-4" />} iconPosition="left" fullWidth>
                        Manage Content
                      </ButtonCustom>
                    </CardContent>
                  </CardCustom>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="carousel" className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Carousel Management</h2>
              
              <CardCustom>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border rounded-lg p-2">
                        <div className="aspect-[16/9] rounded-md bg-secondary mb-2 overflow-hidden">
                          <img 
                            src={`https://picsum.photos/seed/${i}/800/450`} 
                            alt={`Carousel image ${i}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex justify-between">
                          <ButtonCustom variant="outline" size="sm">Replace</ButtonCustom>
                          <ButtonCustom variant="destructive" size="sm">Remove</ButtonCustom>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <ButtonCustom icon={<Plus className="h-4 w-4" />} iconPosition="left">
                    Add New Image
                  </ButtonCustom>
                </CardContent>
              </CardCustom>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Site Settings</h2>
              
              <CardCustom>
                <CardHeader>
                  <CardTitle>Site Mode Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="maintenance-mode" className="text-base font-medium">
                        Maintenance Mode
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Enable this to show the maintenance page to all visitors
                      </p>
                    </div>
                    <Switch 
                      id="maintenance-mode" 
                      checked={maintenanceMode} 
                      onCheckedChange={handleMaintenanceToggle}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="coming-soon-mode" className="text-base font-medium">
                        Coming Soon Mode
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Enable this to show the coming soon page to all visitors
                      </p>
                    </div>
                    <Switch 
                      id="coming-soon-mode" 
                      checked={comingSoonMode} 
                      onCheckedChange={handleComingSoonToggle}
                    />
                  </div>
                  
                  <ButtonCustom 
                    icon={<Save className="h-4 w-4" />} 
                    iconPosition="left"
                  >
                    Save Settings
                  </ButtonCustom>
                </CardContent>
              </CardCustom>
            </TabsContent>
            
            {/* Add more tab content for other sections */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;
