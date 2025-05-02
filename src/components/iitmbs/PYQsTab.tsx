
import { useState } from "react";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { FileQuestion, ChevronLeft } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Level, Branch, pyqsData } from "@/data/iitmbsData";
import { DownloadButton } from "@/components/ui/download-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ButtonCustom } from "@/components/ui/button-custom";

type ExamType = "quiz-1" | "quiz-2" | "end-term";

export const PYQsTab = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>("foundation");
  const [selectedBranch, setSelectedBranch] = useState<Branch>("data-science");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  
  // Years for demonstration - in a real app, these would be dynamically generated from data
  const years = ["2023", "2022", "2021"];

  // Function to go back to year selection
  const handleBack = () => {
    setSelectedYear(null);
  };

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

      {selectedYear ? (
        <div>
          {/* Back button for navigation */}
          <ButtonCustom 
            variant="ghost" 
            size="sm" 
            onClick={handleBack} 
            className="mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Year Selection
          </ButtonCustom>

          <h2 className="text-xl font-bold mb-4">
            {selectedYear} Papers - {selectedBranch === "data-science" ? "Data Science" : "Electronic Systems"} ({selectedLevel})
          </h2>

          <div className="space-y-6">
            {/* Exam Types Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="quiz-1" className="border rounded-lg overflow-hidden mb-4">
                <AccordionTrigger className="px-4 py-3 hover:bg-secondary/20">
                  <div className="flex items-center gap-2">
                    <FileQuestion className="h-5 w-5" />
                    <span className="font-medium">Quiz 1</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {["Set A", "Set B", "Set C"].map((set) => (
                      <CardCustom key={set} glass hover>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center gap-2">
                            <FileQuestion className="h-4 w-4" />
                            Quiz 1 {selectedYear} - {set}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-muted-foreground mb-3">
                            {selectedBranch === "data-science" ? "Data Science" : "Electronic Systems"} ({selectedLevel})
                          </div>
                          <DownloadButton 
                            fileName={`IITM_BS_${selectedBranch}_${selectedLevel}_quiz-1_${selectedYear}_${set.replace(" ", "_").toLowerCase()}.pdf`}
                            initialCount={Math.floor(Math.random() * 100) + 20}
                            label="Download"
                          />
                        </CardContent>
                      </CardCustom>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="quiz-2" className="border rounded-lg overflow-hidden mb-4">
                <AccordionTrigger className="px-4 py-3 hover:bg-secondary/20">
                  <div className="flex items-center gap-2">
                    <FileQuestion className="h-5 w-5" />
                    <span className="font-medium">Quiz 2</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {["Set A", "Set B", "Set C"].map((set) => (
                      <CardCustom key={set} glass hover>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center gap-2">
                            <FileQuestion className="h-4 w-4" />
                            Quiz 2 {selectedYear} - {set}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-muted-foreground mb-3">
                            {selectedBranch === "data-science" ? "Data Science" : "Electronic Systems"} ({selectedLevel})
                          </div>
                          <DownloadButton 
                            fileName={`IITM_BS_${selectedBranch}_${selectedLevel}_quiz-2_${selectedYear}_${set.replace(" ", "_").toLowerCase()}.pdf`}
                            initialCount={Math.floor(Math.random() * 100) + 15}
                            label="Download"
                          />
                        </CardContent>
                      </CardCustom>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="end-term" className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:bg-secondary/20">
                  <div className="flex items-center gap-2">
                    <FileQuestion className="h-5 w-5" />
                    <span className="font-medium">End Term</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {["Set A", "Set B", "Set C"].map((set) => (
                      <CardCustom key={set} glass hover>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base flex items-center gap-2">
                            <FileQuestion className="h-4 w-4" />
                            End Term {selectedYear} - {set}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-muted-foreground mb-3">
                            {selectedBranch === "data-science" ? "Data Science" : "Electronic Systems"} ({selectedLevel})
                          </div>
                          <DownloadButton 
                            fileName={`IITM_BS_${selectedBranch}_${selectedLevel}_end-term_${selectedYear}_${set.replace(" ", "_").toLowerCase()}.pdf`}
                            initialCount={Math.floor(Math.random() * 100) + 25}
                            label="Download"
                          />
                        </CardContent>
                      </CardCustom>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Select Year</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {years.map((year) => (
              <CardCustom 
                key={year} 
                glass 
                hover 
                clickable
                className="transition-all"
                onClick={() => setSelectedYear(year)}
              >
                <CardHeader>
                  <CardTitle>{year} Papers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Access Quiz 1, Quiz 2, and End Term papers for {year}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">3 exam types available</span>
                    <span className="text-sm text-muted-foreground">9 sets total</span>
                  </div>
                </CardContent>
              </CardCustom>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
