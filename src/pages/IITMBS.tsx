
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BranchNotesTab } from "@/components/iitmbs/BranchNotesTab";
import { ToolsTab } from "@/components/iitmbs/ToolsTab";
import { PYQsTab } from "@/components/iitmbs/PYQsTab";
import { CommunitiesTab } from "@/components/iitmbs/CommunitiesTab";
import { PaidCoursesTab } from "@/components/iitmbs/PaidCoursesTab";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { BookOpen, CalendarClock, Bell, FileQuestion, Send, GraduationCap } from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";

const IITMBS = () => {
  const [activeTab, setActiveTab] = useState("notes");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                IIT-M BS Program Resources
              </h1>
              <p className="text-lg text-muted-foreground mb-6 animate-slide-up animate-delay-100">
                Study materials and resources for Data Science and Electronic Systems specializations
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-200">
                <ButtonCustom>Start Learning</ButtonCustom>
                <ButtonCustom variant="outline">View Tools</ButtonCustom>
                <ButtonCustom className="bg-blue-500 hover:bg-blue-600">
                  <Send className="h-4 w-4 mr-2" />
                  Join Official Telegram
                </ButtonCustom>
              </div>
            </div>
          </div>
        </section>

        {/* United IITM BS Telegram Group Banner */}
        <section className="py-4 bg-primary/5">
          <div className="container mx-auto px-4">
            <CardCustom glass>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <Send className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Join the United IITM BS Community</h3>
                      <p className="text-sm text-muted-foreground">Get help, share resources, and connect with other students across all specializations</p>
                    </div>
                  </div>
                  <ButtonCustom className="bg-blue-500 hover:bg-blue-600 whitespace-nowrap">
                    <Send className="h-4 w-4 mr-2" />
                    Join Telegram Group
                  </ButtonCustom>
                </div>
              </CardContent>
            </CardCustom>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-8">
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="pyqs">PYQs</TabsTrigger>
                <TabsTrigger value="communities">Communities</TabsTrigger>
                <TabsTrigger value="paid-courses" className="bg-amber-100/50 text-amber-900 hover:bg-amber-200/50 data-[state=active]:bg-amber-200 data-[state=active]:text-amber-900">
                  Paid Courses
                </TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="dates">Important Dates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="notes" className="mt-8">
                <BranchNotesTab />
              </TabsContent>

              <TabsContent value="tools" className="mt-8">
                <ToolsTab />
              </TabsContent>
              
              <TabsContent value="pyqs" className="mt-8">
                <PYQsTab />
              </TabsContent>
              
              <TabsContent value="communities" className="mt-8">
                <CommunitiesTab />
              </TabsContent>
              
              {/* Paid Courses Tab with golden highlight */}
              <TabsContent value="paid-courses" className="mt-8">
                <PaidCoursesTab />
              </TabsContent>
              
              {/* Syllabus Tab */}
              <TabsContent value="syllabus" className="mt-8">
                <CardCustom glass>
                  <CardHeader>
                    <CardTitle>IITM-BS Complete Syllabus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      The complete and updated syllabus for IITM-BS degree with chapter-wise breakdowns for Data Science and Electronic Systems.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {["Data Science", "Electronic Systems"].map((subject) => (
                        <div key={subject} className="border rounded-lg p-4">
                          <h3 className="text-lg font-medium mb-3">{subject}</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                                  {i}
                                </div>
                                <span>Sample {subject} Topic {i}</span>
                              </li>
                            ))}
                          </ul>
                          <ButtonCustom variant="outline" size="sm" fullWidth>
                            View Full {subject} Syllabus
                          </ButtonCustom>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <DownloadButton
                        fileName="IITM_BS_Complete_Syllabus.pdf"
                        label="Download Complete IITM-BS Syllabus"
                        initialCount={423}
                      />
                    </div>
                  </CardContent>
                </CardCustom>
              </TabsContent>
              
              {/* News Tab */}
              <TabsContent value="news" className="mt-8">
                <div className="space-y-6">
                  {[
                    {
                      title: "IITM-BS Application Window Opens",
                      date: "2023-12-15",
                      content: "The Indian Institute of Technology Madras (IITM) has opened the application window for BS degree. Candidates can apply online through the official website until January 15, 2024."
                    },
                    {
                      title: "Changes in IITM-BS Program Announced",
                      date: "2023-11-30",
                      content: "The Ministry of Education has announced some changes in the IITM-BS program pattern for 2024. The program will now include more practical questions and application-based problems."
                    },
                    {
                      title: "IITM-BS Counseling Schedule Released",
                      date: "2023-11-10",
                      content: "The IITM has released the counseling schedule for BS admissions. The first round of counseling will start from November 20, 2023."
                    }
                  ].map((news, index) => (
                    <CardCustom 
                      key={index} 
                      glass
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-xl font-medium">{news.title}</h3>
                          <div className="text-sm text-muted-foreground whitespace-nowrap">
                            {new Date(news.date).toLocaleDateString()}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{news.content}</p>
                        <ButtonCustom variant="outline" size="sm">Read More</ButtonCustom>
                      </CardContent>
                    </CardCustom>
                  ))}
                </div>
              </TabsContent>
              
              {/* Important Dates Tab */}
              <TabsContent value="dates" className="mt-8">
                <CardCustom glass>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarClock className="h-5 w-5" />
                      Important Dates & Deadlines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Keep track of all important dates and deadlines related to IITM-BS program to ensure you don't miss anything important.
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4">Event</th>
                            <th className="text-left py-3 px-4">Date</th>
                            <th className="text-left py-3 px-4 hidden md:table-cell">Description</th>
                            <th className="text-right py-3 px-4">Days Left</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              event: "IITM-BS Application Deadline",
                              date: "2024-01-15",
                              description: "Last date to submit application form",
                              daysLeft: 30
                            },
                            {
                              event: "Admit Card Release",
                              date: "2024-04-10",
                              description: "Download from official website",
                              daysLeft: 115
                            },
                            {
                              event: "Entrance Examination",
                              date: "2024-05-05",
                              description: "Pen and paper based test",
                              daysLeft: 140
                            },
                            {
                              event: "Result Declaration",
                              date: "2024-06-10",
                              description: "Results available on official website",
                              daysLeft: 175
                            },
                            {
                              event: "Counseling Begins",
                              date: "2024-06-20",
                              description: "All India Quota counseling starts",
                              daysLeft: 185
                            }
                          ].map((date, index) => (
                            <tr key={index} className="border-b hover:bg-secondary/20">
                              <td className="py-4 px-4 font-medium">{date.event}</td>
                              <td className="py-4 px-4">{new Date(date.date).toLocaleDateString()}</td>
                              <td className="py-4 px-4 text-muted-foreground hidden md:table-cell">{date.description}</td>
                              <td className="py-4 px-4 text-right">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  date.daysLeft < 30 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                                }`}>
                                  {date.daysLeft} days
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <ButtonCustom 
                        icon={<Bell className="h-4 w-4" />} 
                        iconPosition="left"
                      >
                        Set Reminder for Important Dates
                      </ButtonCustom>
                    </div>
                  </CardContent>
                </CardCustom>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IITMBS;
