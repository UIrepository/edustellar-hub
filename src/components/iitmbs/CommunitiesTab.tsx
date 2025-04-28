
import { useState } from "react";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Users, MessageCircle, Telegram } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Branch, Level, communitiesData } from "@/data/iitmbsData";
import { Link } from "react-router-dom";

export const CommunitiesTab = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>("data-science");
  const [selectedLevel, setSelectedLevel] = useState<Level>("foundation");
  
  const communities = selectedBranch === "data-science" 
    ? communitiesData.dataScience
    : communitiesData.electronicSystems;

  const currentLevelSubjects = communities.subjects[selectedLevel] || [];

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardCustom glass>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Subject Communities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Join our IITM-BS subject-specific communities to connect with other students, discuss topics, share resources, and get help.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {currentLevelSubjects.map((subject) => (
                <div key={subject.name} className="border rounded-lg p-4">
                  <h4 className="font-medium">{subject.name}</h4>
                  <p className="text-xs text-muted-foreground mb-3">Active discussion groups</p>
                  <div className="flex gap-2">
                    <ButtonCustom size="sm" variant="outline" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </ButtonCustom>
                    <ButtonCustom size="sm" variant="outline" className="flex-1">
                      <Telegram className="h-4 w-4 mr-2" />
                      Telegram
                    </ButtonCustom>
                    <Link 
                      to={`/iitm-bs/subjects/${subject.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex-1"
                    >
                      <ButtonCustom size="sm" variant="outline" fullWidth>
                        View Notes
                      </ButtonCustom>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </CardCustom>
        
        <CardCustom glass>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Qualifier Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Preparing for the IITM-BS qualifier exam? Join our dedicated communities for preparation, tips, and support.
            </p>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium">{communities.qualifiers}</h4>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  Join these exclusive groups for students preparing for the qualification exam.
                </p>
                <div className="flex gap-2">
                  <ButtonCustom className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Join WhatsApp
                  </ButtonCustom>
                  <ButtonCustom className="flex-1">
                    <Telegram className="h-4 w-4 mr-2" />
                    Join Telegram
                  </ButtonCustom>
                </div>
              </div>
            </div>
          </CardContent>
        </CardCustom>
      </div>
    </div>
  );
};
