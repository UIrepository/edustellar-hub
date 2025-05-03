import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, BookOpen, Users, CalendarClock, Bell, FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";
import { NotesTab } from "@/components/neet/NotesTab";
import { PreviousYearTab } from "@/components/neet/PreviousYearTab";

const NEET = () => {
  const [activeTab, setActiveTab] = useState("notes");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                NEET - Medical MBBS Resources
              </h1>
              <p className="text-lg text-muted-foreground mb-6 animate-slide-up animate-delay-100">
                Comprehensive study materials, practice papers, and guidance for NEET aspirants
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-200">
                <ButtonCustom>Start Preparation</ButtonCustom>
                <ButtonCustom variant="outline">View Mock Tests</ButtonCustom>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-3 md:grid-cols-6">
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="pyqs">PYQs</TabsTrigger>
                <TabsTrigger value="padhai-mitra">Padhai Mitra</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="dates">Important Dates</TabsTrigger>
              </TabsList>
              
              {/* Notes Tab */}
              <TabsContent value="notes" className="mt-8">
                <NotesTab />
              </TabsContent>
              
              {/* PYQs Tab */}
              <TabsContent value="pyqs" className="mt-8">
                <PreviousYearTab />
              </TabsContent>
              
              {/* Padhai Mitra Tab */}
              <TabsContent value="padhai-mitra" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CardCustom glass>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Community Links
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        Join our NEET preparation community to connect with other aspirants, mentors, and experts. Share resources, ask questions, and stay motivated together.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h4 className="font-medium">WhatsApp Group</h4>
                            <p className="text-sm text-muted-foreground">Join our active WhatsApp community</p>
                          </div>
                          <ButtonCustom>Join Group</ButtonCustom>
                        </div>
                        
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h4 className="font-medium">Telegram Channel</h4>
                            <p className="text-sm text-muted-foreground">Get regular updates and resources</p>
                          </div>
                          <ButtonCustom>Subscribe</ButtonCustom>
                        </div>
                      </div>
                    </CardContent>
                  </CardCustom>
                  
                  <CardCustom glass>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Study Guides
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        Our expert-created study guides will help you navigate through NEET preparation effectively with optimized study plans, topic-wise strategies, and exam-taking tips.
                      </p>
                      
                      <div className="space-y-4">
                        {["Physics Study Guide", "Chemistry Study Guide", "Biology Study Guide"].map((guide) => (
                          <div key={guide} className="flex items-center justify-between gap-4">
                            <h4 className="font-medium">{guide}</h4>
                            <ButtonCustom variant="outline" size="sm" icon={<Download className="h-4 w-4" />} iconPosition="right">
                              Download
                            </ButtonCustom>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CardCustom>
                </div>
              </TabsContent>
              
              {/* Syllabus Tab */}
              <TabsContent value="syllabus" className="mt-8">
                <CardCustom glass>
                  <CardHeader>
                    <CardTitle>NEET Complete Syllabus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      The complete and updated syllabus for NEET examination with chapter-wise breakdowns for Physics, Chemistry, and Biology.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {["Physics", "Chemistry", "Biology"].map((subject) => (
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
                      <ButtonCustom 
                        icon={<Download className="h-4 w-4" />} 
                        iconPosition="left"
                      >
                        Download Complete NEET Syllabus
                      </ButtonCustom>
                    </div>
                  </CardContent>
                </CardCustom>
              </TabsContent>
              
              {/* News Tab */}
              <TabsContent value="news" className="mt-8">
                <div className="space-y-6">
                  {[
                    {
                      title: "NEET 2024 Application Window Opens",
                      date: "2023-12-15",
                      content: "The National Testing Agency (NTA) has opened the application window for NEET 2024. Candidates can apply online through the official website until January 15, 2024."
                    },
                    {
                      title: "Changes in NEET Exam Pattern Announced",
                      date: "2023-11-30",
                      content: "The Ministry of Education has announced some changes in the NEET examination pattern for 2024. The exam will now include more conceptual questions and application-based problems."
                    },
                    {
                      title: "NEET Counseling Schedule Released",
                      date: "2023-11-10",
                      content: "The Medical Counseling Committee (MCC) has released the counseling schedule for NEET admissions. The first round of counseling will start from November 20, 2023."
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
                      Keep track of all important dates and deadlines related to NEET examination to ensure you don't miss anything important.
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
                              event: "NEET 2024 Application Deadline",
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
                              event: "NEET 2024 Examination",
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
            
            {/* Mock Test Block */}
            <div className="mt-16">
              <CardCustom glass className="bg-gradient-to-r from-primary/5 to-primary/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4">NEET Mock Tests</h2>
                    <p className="text-muted-foreground mb-6">
                      Practice with our high-quality mock tests designed to simulate the actual NEET exam experience. Get detailed analysis and performance reports to improve your preparation.
                    </p>
                    <div className="space-y-4">
                      <ButtonCustom>Start Free Mock Test</ButtonCustom>
                      <ButtonCustom variant="outline">View All Mock Tests</ButtonCustom>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-8 bg-primary/5 rounded-r-lg">
                    <div>
                      <div className="text-center mb-4">
                        <div className="text-4xl font-bold text-primary mb-1">10+</div>
                        <div className="text-sm text-muted-foreground">Full-length Mock Tests</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary mb-1">50+</div>
                          <div className="text-sm text-muted-foreground">Subject-wise Tests</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary mb-1">500+</div>
                          <div className="text-sm text-muted-foreground">Practice Questions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardCustom>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NEET;
