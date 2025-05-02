
import React, { useState } from "react";
import { CardCustom, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Check, Layers, Users } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { Branch, Level } from "@/data/iitmbsData";

type PaidCourse = {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  discountedPrice?: number;
  duration: string;
  level: Level;
  branch: Branch;
  studentsEnrolled: number;
  enrollmentLink: string;
};

// Sample courses data
const paidCoursesData: PaidCourse[] = [
  {
    id: "ds-foundation-1",
    title: "Data Science Foundation - Complete Course",
    description: "Master the fundamentals of Data Science with our comprehensive course designed for IIT-M BS students.",
    features: [
      "Complete coverage of foundation topics",
      "60+ hours of video content",
      "Practice problems and solutions",
      "Mock tests and quizzes",
      "Doubt solving sessions",
    ],
    price: 4999,
    discountedPrice: 2999,
    duration: "6 months",
    level: "foundation",
    branch: "data-science",
    studentsEnrolled: 750,
    enrollmentLink: "/courses/data-science-foundation"
  },
  {
    id: "ds-diploma-1",
    title: "Data Science Diploma - Advanced Topics",
    description: "Take your Data Science knowledge to the next level with our advanced Diploma course.",
    features: [
      "In-depth coverage of advanced topics",
      "80+ hours of video content",
      "Real-world projects and case studies",
      "Personalized feedback on assignments",
      "Live workshops with industry experts",
    ],
    price: 7999,
    discountedPrice: 5999,
    duration: "8 months",
    level: "diploma",
    branch: "data-science",
    studentsEnrolled: 420,
    enrollmentLink: "/courses/data-science-diploma"
  },
  {
    id: "es-foundation-1",
    title: "Electronic Systems Foundation Course",
    description: "Build a solid foundation in Electronic Systems with our comprehensive course for IIT-M BS students.",
    features: [
      "Complete coverage of foundation topics",
      "50+ hours of video content",
      "Interactive circuit simulations",
      "Weekly assignments with solutions",
      "One-on-one mentoring sessions",
    ],
    price: 4999,
    discountedPrice: 2999,
    duration: "6 months",
    level: "foundation",
    branch: "electronic-systems",
    studentsEnrolled: 320,
    enrollmentLink: "/courses/electronic-systems-foundation"
  },
  {
    id: "ds-degree-1", 
    title: "Data Science Degree - Specialized Track",
    description: "Specialized course for IIT-M BS degree students focusing on advanced analytics and machine learning.",
    features: [
      "Specialized tracks for ML/AI or Data Engineering",
      "100+ hours of comprehensive content",
      "Capstone projects with industry partners",
      "Interview preparation and career guidance",
      "Certificate of completion",
    ],
    price: 9999,
    discountedPrice: 7999,
    duration: "10 months",
    level: "degree",
    branch: "data-science",
    studentsEnrolled: 210,
    enrollmentLink: "/courses/data-science-degree"
  }
];

export const PaidCoursesTab = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>("foundation");
  const [selectedBranch, setSelectedBranch] = useState<Branch>("data-science");

  // Filter courses based on selected branch and level
  const filteredCourses = paidCoursesData.filter(
    course => course.branch === selectedBranch && course.level === selectedLevel
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div>
          <h3 className="text-lg font-medium mb-2">Branch</h3>
          <ToggleGroup 
            type="single" 
            value={selectedBranch}
            onValueChange={(value) => value && setSelectedBranch(value as Branch)}
            className="flex flex-wrap gap-2"
          >
            <ToggleGroupItem value="data-science" className="px-4 py-2">
              Data Science
            </ToggleGroupItem>
            <ToggleGroupItem value="electronic-systems" className="px-4 py-2">
              Electronic Systems
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Level</h3>
          <ToggleGroup 
            type="single" 
            value={selectedLevel}
            onValueChange={(value) => value && setSelectedLevel(value as Level)}
            className="flex flex-wrap gap-2"
          >
            <ToggleGroupItem value="foundation" className="px-3 py-2">
              Foundation
            </ToggleGroupItem>
            <ToggleGroupItem value="diploma" className="px-3 py-2">
              Diploma
            </ToggleGroupItem>
            <ToggleGroupItem value="degree" className="px-3 py-2">
              BS Degree
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CardCustom key={course.id} glass hover className="h-full">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{course.studentsEnrolled}+ students</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-1">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {course.discountedPrice ? (
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">₹{course.discountedPrice}</span>
                          <span className="text-sm text-muted-foreground line-through">₹{course.price}</span>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold">₹{course.price}</span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                      Limited time offer
                    </span>
                  </div>
                  
                  <ButtonCustom 
                    fullWidth
                    className="font-medium"
                    onClick={() => window.location.href = course.enrollmentLink}
                  >
                    Enroll Now
                  </ButtonCustom>
                </div>
              </CardContent>
            </CardCustom>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-muted-foreground">
            No courses found for the selected category. Please try a different selection.
          </div>
        )}
      </div>
    </div>
  );
};
