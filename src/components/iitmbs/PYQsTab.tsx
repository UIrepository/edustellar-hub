
import { useState } from "react";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { FileQuestion } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Level, Branch, pyqsData } from "@/data/iitmbsData";
import { DownloadButton } from "@/components/ui/download-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type ExamType = "quiz-1" | "quiz-2" | "end-term";

export const PYQsTab = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>("foundation");
  const [selectedBranch, setSelectedBranch] = useState<Branch>("data-science");
  const [selectedExamType, setSelectedExamType] = useState<ExamType>("quiz-1");
  
  // Years for demonstration - in a real app, these would be dynamically generated from data
  const years = ["2023", "2022", "2021"];

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

      {/* Exam Type Filter */}
      <div>
        <h3 className="text-lg font-medium mb-2">Exam Type</h3>
        <Tabs 
          value={selectedExamType} 
          onValueChange={(value) => setSelectedExamType(value as ExamType)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quiz-1">Quiz 1</TabsTrigger>
            <TabsTrigger value="quiz-2">Quiz 2</TabsTrigger>
            <TabsTrigger value="end-term">End Term</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Year-wise Collapsible Sections */}
      <div className="space-y-4 mt-6">
        {years.map((year) => (
          <Collapsible key={year} className="w-full border rounded-lg overflow-hidden">
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium hover:bg-secondary/20">
              <span>{year} Papers</span>
              <div className="text-sm text-muted-foreground">3 sets available</div>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Set A", "Set B", "Set C"].map((set) => (
                  <CardCustom key={set} glass hover>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <FileQuestion className="h-4 w-4" />
                        {selectedExamType === "end-term" ? "End Term" : `Quiz ${selectedExamType === "quiz-1" ? "1" : "2"}`} {year} - {set}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground mb-3">
                        {selectedBranch === "data-science" ? "Data Science" : "Electronic Systems"} ({selectedLevel})
                      </div>
                      <DownloadButton 
                        fileName={`IITM_BS_${selectedBranch}_${selectedLevel}_${selectedExamType}_${year}_${set.replace(" ", "_").toLowerCase()}.pdf`}
                        initialCount={Math.floor(Math.random() * 100) + 20}
                        label="Download"
                      />
                    </CardContent>
                  </CardCustom>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};
