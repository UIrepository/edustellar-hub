
import { useState } from "react";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Users, MessageSquare, Send, Filter } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Branch, Level, communitiesData } from "@/data/iitmbsData";
import { Link } from "react-router-dom";
import { SearchBar } from "@/components/ui/search-bar";

export const CommunitiesTab = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>("data-science");
  const [selectedLevel, setSelectedLevel] = useState<Level>("foundation");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "notes" | "community" | "exam">("all");
  
  const communities = selectedBranch === "data-science" 
    ? communitiesData.dataScience
    : communitiesData.electronicSystems;

  const currentLevelSubjects = communities.subjects[selectedLevel] || [];

  // Filter subjects based on search query
  const filteredSubjects = currentLevelSubjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
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
            <ToggleGroupItem value="qualifier" className="px-3 py-2">
              Qualifier
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="w-full">
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery}
          placeholder="Search communities..."
        />
      </div>
      
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium mr-2">Filter by:</span>
        <ToggleGroup
          type="single"
          value={filterType}
          onValueChange={(value) => value && setFilterType(value as "all" | "notes" | "community" | "exam")}
          className="flex flex-wrap gap-2"
        >
          <ToggleGroupItem value="all" size="sm" className="px-3 py-1 text-xs">All</ToggleGroupItem>
          <ToggleGroupItem value="notes" size="sm" className="px-3 py-1 text-xs">Notes</ToggleGroupItem>
          <ToggleGroupItem value="community" size="sm" className="px-3 py-1 text-xs">Community</ToggleGroupItem>
          <ToggleGroupItem value="exam" size="sm" className="px-3 py-1 text-xs">Exam Groups</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* United IITM BS Telegram Group */}
        <CardCustom glass className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              United IITM BS Telegram Group
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Join our official unified Telegram group for all IITM BS students. Get important updates, connect with peers, and access shared resources.
            </p>
            
            <ButtonCustom fullWidth className="bg-blue-500 hover:bg-blue-600">
              <Send className="h-4 w-4 mr-2" />
              Join Official Telegram Group
            </ButtonCustom>
          </CardContent>
        </CardCustom>

        {(filterType === "all" || filterType === "community") && (
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
                {filteredSubjects.length > 0 ? (
                  filteredSubjects.map((subject) => (
                    <div key={subject.name} className="border rounded-lg p-4">
                      <h4 className="font-medium">{subject.name}</h4>
                      <p className="text-xs text-muted-foreground mb-3">Active discussion groups</p>
                      <div className="flex gap-2">
                        <ButtonCustom size="sm" variant="outline" className="flex-1">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          WhatsApp
                        </ButtonCustom>
                        <ButtonCustom size="sm" variant="outline" className="flex-1">
                          <Send className="h-4 w-4 mr-2" />
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
                  ))
                ) : (
                  <div className="text-center py-6 text-muted-foreground">
                    No communities found matching your criteria.
                  </div>
                )}
              </div>
            </CardContent>
          </CardCustom>
        )}
        
        {(filterType === "all" || filterType === "exam") && (
          <CardCustom glass>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {selectedLevel === "qualifier" ? "Qualifier Community" : `${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Level Community`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                {selectedLevel === "qualifier" 
                  ? "Preparing for the IITM-BS qualifier exam? Join our dedicated communities for preparation, tips, and support."
                  : `Connect with other students in the ${selectedLevel} level for discussions, support, and shared resources.`}
              </p>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">{communities.qualifiers}</h4>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">
                    Join these exclusive groups for students preparing for the qualification exam.
                  </p>
                  <div className="flex gap-2">
                    <ButtonCustom className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Join WhatsApp
                    </ButtonCustom>
                    <ButtonCustom className="flex-1">
                      <Send className="h-4 w-4 mr-2" />
                      Join Telegram
                    </ButtonCustom>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardCustom>
        )}
      </div>

      {filteredSubjects.length === 0 && filterType === "all" && searchQuery && (
        <div className="text-center py-8 text-muted-foreground">
          No communities found matching your search criteria.
        </div>
      )}
    </div>
  );
};
