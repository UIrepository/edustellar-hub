
import { useState } from "react";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Users, BookOpen } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Branch, communitiesData } from "@/data/iitmbsData";

export const CommunitiesTab = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>("data-science");
  
  const communities = selectedBranch === "data-science" 
    ? communitiesData.dataScience
    : communitiesData.electronicSystems;

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <CardCustom glass>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Subject Communities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Join our IITM-BS subject-specific WhatsApp communities to connect with other students, discuss topics, share resources, and get help with assignments.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {communities.subjects.map((subject) => (
                <div key={subject} className="border rounded-lg p-3">
                  <h4 className="font-medium">{subject} Community</h4>
                  <p className="text-xs text-muted-foreground mb-2">Active discussion group</p>
                  <ButtonCustom size="sm" variant="outline" fullWidth>Join Group</ButtonCustom>
                </div>
              ))}
            </div>
          </CardContent>
        </CardCustom>
        
        <CardCustom glass>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Qualifier Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Preparing for the IITM-BS qualifier exam? Join our dedicated community for qualifier exam preparation, tips, and support from others in the same journey.
            </p>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium">{communities.qualifiers}</h4>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  Join this exclusive group for students preparing for the qualification exam. Get access to preparation materials, strategies, and moral support.
                </p>
                <ButtonCustom fullWidth>Join Qualifiers Community</ButtonCustom>
              </div>
            </div>
          </CardContent>
        </CardCustom>
      </div>
    </div>
  );
};
