
import { useState } from "react";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { FileText, ChevronLeft } from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Subject data with chapters and notes
const subjectsData = {
  "Physics": {
    "11": [
      {
        chapter: "Kinematics",
        notes: [
          { title: "Motion in a Straight Line", downloads: 156 },
          { title: "Motion in a Plane", downloads: 124 }
        ]
      },
      {
        chapter: "Laws of Motion",
        notes: [
          { title: "Newton's Laws", downloads: 178 },
          { title: "Friction", downloads: 132 }
        ]
      },
      {
        chapter: "Work, Energy and Power",
        notes: [
          { title: "Work and Energy", downloads: 145 },
          { title: "Conservation of Energy", downloads: 118 }
        ]
      }
    ],
    "12": [
      {
        chapter: "Electrostatics",
        notes: [
          { title: "Electric Charges and Fields", downloads: 167 },
          { title: "Electrostatic Potential and Capacitance", downloads: 139 }
        ]
      },
      {
        chapter: "Current Electricity",
        notes: [
          { title: "Current and Resistance", downloads: 183 },
          { title: "Electrical Circuits", downloads: 152 }
        ]
      },
      {
        chapter: "Electromagnetic Waves",
        notes: [
          { title: "EM Wave Characteristics", downloads: 121 },
          { title: "EM Wave Applications", downloads: 109 }
        ]
      }
    ]
  },
  "Chemistry": {
    "types": {
      "Organic": {
        "11": [
          {
            chapter: "Basic Concepts of Organic Chemistry",
            notes: [
              { title: "Organic Chemistry Introduction", downloads: 175 },
              { title: "IUPAC Nomenclature", downloads: 193 }
            ]
          },
          {
            chapter: "Hydrocarbons",
            notes: [
              { title: "Alkanes, Alkenes and Alkynes", downloads: 168 },
              { title: "Aromatic Hydrocarbons", downloads: 142 }
            ]
          }
        ],
        "12": [
          {
            chapter: "Alcohols, Phenols and Ethers",
            notes: [
              { title: "Properties of Alcohols", downloads: 156 },
              { title: "Phenols and Ethers", downloads: 134 }
            ]
          },
          {
            chapter: "Aldehydes, Ketones and Carboxylic Acids",
            notes: [
              { title: "Carbonyl Compounds", downloads: 182 },
              { title: "Carboxylic Acids and Derivatives", downloads: 165 }
            ]
          }
        ]
      },
      "Inorganic": {
        "11": [
          {
            chapter: "Classification of Elements and Periodicity",
            notes: [
              { title: "Periodic Table", downloads: 187 },
              { title: "Periodic Properties", downloads: 165 }
            ]
          },
          {
            chapter: "Chemical Bonding",
            notes: [
              { title: "Ionic and Covalent Bonds", downloads: 173 },
              { title: "Molecular Orbital Theory", downloads: 129 }
            ]
          }
        ],
        "12": [
          {
            chapter: "d and f Block Elements",
            notes: [
              { title: "Transition Elements", downloads: 163 },
              { title: "Inner Transition Elements", downloads: 138 }
            ]
          },
          {
            chapter: "Coordination Compounds",
            notes: [
              { title: "Werner's Theory", downloads: 144 },
              { title: "Isomerism in Coordination Compounds", downloads: 127 }
            ]
          }
        ]
      },
      "Physical": {
        "11": [
          {
            chapter: "States of Matter",
            notes: [
              { title: "Gaseous State", downloads: 181 },
              { title: "Liquid State", downloads: 154 }
            ]
          },
          {
            chapter: "Thermodynamics",
            notes: [
              { title: "First Law of Thermodynamics", downloads: 192 },
              { title: "Entropy and Second Law", downloads: 173 }
            ]
          }
        ],
        "12": [
          {
            chapter: "Solutions",
            notes: [
              { title: "Types of Solutions", downloads: 158 },
              { title: "Colligative Properties", downloads: 143 }
            ]
          },
          {
            chapter: "Electrochemistry",
            notes: [
              { title: "Electrochemical Cells", downloads: 162 },
              { title: "Electrolysis", downloads: 137 }
            ]
          }
        ]
      }
    }
  },
  "Biology": {
    "types": {
      "Botany": {
        "11": [
          {
            chapter: "Plant Kingdom",
            notes: [
              { title: "Classification of Plants", downloads: 198 },
              { title: "Plant Life Cycle", downloads: 182 }
            ]
          },
          {
            chapter: "Plant Anatomy",
            notes: [
              { title: "Tissues and Tissue Systems", downloads: 175 },
              { title: "Secondary Growth", downloads: 158 }
            ]
          }
        ],
        "12": [
          {
            chapter: "Reproduction in Plants",
            notes: [
              { title: "Asexual Reproduction", downloads: 186 },
              { title: "Sexual Reproduction", downloads: 205 }
            ]
          },
          {
            chapter: "Genetics and Evolution",
            notes: [
              { title: "Mendel's Laws", downloads: 193 },
              { title: "Plant Breeding", downloads: 168 }
            ]
          }
        ]
      },
      "Zoology": {
        "11": [
          {
            chapter: "Animal Kingdom",
            notes: [
              { title: "Classification of Animals", downloads: 204 },
              { title: "Animal Tissues", downloads: 187 }
            ]
          },
          {
            chapter: "Human Physiology",
            notes: [
              { title: "Digestive System", downloads: 212 },
              { title: "Respiratory System", downloads: 196 }
            ]
          }
        ],
        "12": [
          {
            chapter: "Human Reproduction",
            notes: [
              { title: "Male Reproductive System", downloads: 189 },
              { title: "Female Reproductive System", downloads: 215 }
            ]
          },
          {
            chapter: "Evolution",
            notes: [
              { title: "Origin of Life", downloads: 176 },
              { title: "Human Evolution", downloads: 195 }
            ]
          }
        ]
      }
    }
  }
};

export const NotesTab = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // View subject details function
  const viewSubject = (subject: string) => {
    setSelectedSubject(subject);
    setSelectedType(null);
  };

  // Select type (for Biology or Chemistry)
  const selectType = (type: string) => {
    setSelectedType(type);
  };

  // Go back to subject list or type list
  const goBack = () => {
    if (selectedType) {
      setSelectedType(null);
    } else {
      setSelectedSubject(null);
    }
  };

  // Render note items
  const renderNoteItems = (note: any, chapterName: string, subject: string) => (
    <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-md">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-primary" />
        <span>{note.title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">{note.downloads} downloads</span>
        <DownloadButton
          fileName={`neet_${subject.toLowerCase()}_${chapterName.toLowerCase().replace(/\s+/g, '_')}_${note.title.toLowerCase().replace(/\s+/g, '_')}.pdf`}
          initialCount={note.downloads}
        />
      </div>
    </div>
  );

  return (
    <>
      {!selectedSubject ? (
        // Subject selection view
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.keys(subjectsData).map((subject) => (
            <CardCustom key={subject} glass hover onClick={() => viewSubject(subject)}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {subject} Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive {subject.toLowerCase()} notes covering all NEET topics with diagrams and examples.
                </p>
                <DownloadButton
                  fileName={`neet_${subject.toLowerCase()}_notes.pdf`}
                  label="Download Notes"
                  initialCount={Math.floor(Math.random() * 200) + 50}
                />
              </CardContent>
            </CardCustom>
          ))}
        </div>
      ) : (
        // Subject chapters view
        <div>
          <div className="mb-6">
            <ButtonCustom
              variant="outline"
              className="mb-4"
              onClick={goBack}
            >
              <ChevronLeft className="h-4 w-4 mr-2" /> 
              {selectedType ? `Back to ${selectedSubject}` : 'Back to Subjects'}
            </ButtonCustom>
            <h2 className="text-2xl font-bold">{selectedSubject} Notes</h2>
          </div>
          
          {/* For Chemistry and Biology, show type selection */}
          {(selectedSubject === "Chemistry" || selectedSubject === "Biology") && !selectedType ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys((subjectsData[selectedSubject as keyof typeof subjectsData] as any).types).map((type) => (
                <CardCustom key={type} glass hover onClick={() => selectType(type)}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {selectedSubject === "Biology" 
                        ? `${type === "Botany" ? "Plant-related" : "Animal-related"} topics and concepts`
                        : `${type} chemistry concepts and formulas`}
                    </p>
                    <ButtonCustom 
                      variant="outline"
                      className="w-full"
                    >
                      View {type} Notes
                    </ButtonCustom>
                  </CardContent>
                </CardCustom>
              ))}
            </div>
          ) : (
            // Show class-wise notes
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Class 11 Section */}
              <CardCustom glass>
                <CardHeader>
                  <CardTitle>Class 11 Chapters</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {selectedSubject && selectedType 
                      ? ((subjectsData[selectedSubject as keyof typeof subjectsData] as any).types[selectedType]["11"].map((chapter: any, idx: number) => (
                          <AccordionItem key={idx} value={`class-11-chapter-${idx}`}>
                            <AccordionTrigger className="hover:bg-secondary/10 px-4 rounded-md">
                              {chapter.chapter}
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                              <div className="space-y-3 mt-2">
                                {chapter.notes.map((note: any, noteIdx: number) => renderNoteItems(note, chapter.chapter, selectedSubject))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        )))
                      : (subjectsData[selectedSubject as keyof typeof subjectsData]["11"].map((chapter, idx) => (
                          <AccordionItem key={idx} value={`class-11-chapter-${idx}`}>
                            <AccordionTrigger className="hover:bg-secondary/10 px-4 rounded-md">
                              {chapter.chapter}
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                              <div className="space-y-3 mt-2">
                                {chapter.notes.map((note, noteIdx) => renderNoteItems(note, chapter.chapter, selectedSubject))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        )))}
                  </Accordion>
                </CardContent>
              </CardCustom>

              {/* Class 12 Section */}
              <CardCustom glass>
                <CardHeader>
                  <CardTitle>Class 12 Chapters</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {selectedSubject && selectedType 
                      ? ((subjectsData[selectedSubject as keyof typeof subjectsData] as any).types[selectedType]["12"].map((chapter: any, idx: number) => (
                          <AccordionItem key={idx} value={`class-12-chapter-${idx}`}>
                            <AccordionTrigger className="hover:bg-secondary/10 px-4 rounded-md">
                              {chapter.chapter}
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                              <div className="space-y-3 mt-2">
                                {chapter.notes.map((note: any, noteIdx: number) => renderNoteItems(note, chapter.chapter, selectedSubject))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        )))
                      : (subjectsData[selectedSubject as keyof typeof subjectsData]["12"].map((chapter, idx) => (
                          <AccordionItem key={idx} value={`class-12-chapter-${idx}`}>
                            <AccordionTrigger className="hover:bg-secondary/10 px-4 rounded-md">
                              {chapter.chapter}
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                              <div className="space-y-3 mt-2">
                                {chapter.notes.map((note, noteIdx) => renderNoteItems(note, chapter.chapter, selectedSubject))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        )))}
                  </Accordion>
                </CardContent>
              </CardCustom>
            </div>
          )}
        </div>
      )}
    </>
  );
};
