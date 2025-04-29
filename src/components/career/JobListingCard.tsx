
import { useState } from "react";
import { CardCustom, CardContent, CardHeader, CardTitle } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { BriefcaseBusiness, Calendar, ChevronDown, ChevronUp, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type JobListingProps = {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
};

export const JobListingCard = ({
  title,
  department,
  location,
  type,
  description,
  requirements,
  responsibilities,
  postedDate
}: JobListingProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  return (
    <CardCustom glass className="mb-6 overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
            {type}
          </span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1.5">
            <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
            <span>{department}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Posted on {postedDate}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        
        <div 
          className={cn(
            "grid transition-all duration-300 overflow-hidden",
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="pt-4 border-t space-y-6">
              <div>
                <h4 className="font-medium mb-2">Requirements</h4>
                <ul className="space-y-2">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                        {i+1}
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Responsibilities</h4>
                <ul className="space-y-2">
                  {responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                        {i+1}
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <ButtonCustom 
                icon={<Users className="h-4 w-4" />} 
                iconPosition="left"
                className="w-full md:w-auto"
              >
                Apply for this Position
              </ButtonCustom>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-4">
          <ButtonCustom 
            variant="ghost" 
            size="sm" 
            onClick={toggleExpand}
            className="flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span>View More</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </ButtonCustom>
        </div>
      </CardContent>
    </CardCustom>
  );
};
