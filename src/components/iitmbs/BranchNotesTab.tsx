
import { useState } from "react";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { FileText } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { dataScience, electronicSystems, Level, Branch } from "@/data/iitmbsData";
import { DownloadButton } from "@/components/ui/download-button";
import { SearchBar } from "@/components/ui/search-bar";

export const BranchNotesTab = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>("foundation");
  const [selectedBranch, setSelectedBranch] = useState<Branch>("data-science");
  const [searchQuery, setSearchQuery] = useState("");

  // Get the current branch data based on selection
  const getBranchData = () => {
    return selectedBranch === "data-science" ? dataScience : electronicSystems;
  };

  const currentLevelData = getBranchData()[selectedLevel];
  
  // Filter subjects based on search query
  const filteredSubjects = currentLevelData.subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Branch and Level Filters */}
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

      {/* Search Bar */}
      <div className="w-full">
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery}
          placeholder="Search courses..."
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          {currentLevelData.title} - {selectedBranch === "data-science" ? "Data Science" : "Electronic Systems"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSubjects.map((subject) => (
            <CardCustom key={subject.name} glass className="col-span-1">
              <CardHeader>
                <CardTitle>{subject.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Course Notes</span>
                  </div>
                  <DownloadButton 
                    fileName={`${subject.name.toLowerCase().replace(/\s+/g, '_')}_notes.pdf`}
                    initialCount={Math.floor(Math.random() * 100) + 10}
                  />
                </div>
              </CardContent>
            </CardCustom>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No courses found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};
