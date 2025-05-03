
import { useState } from "react";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { FileText, ChevronLeft } from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ButtonCustom } from "@/components/ui/button-custom";

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
    "11": [
      {
        chapter: "Basic Concepts",
        notes: [
          { title: "Atoms and Molecules", downloads: 187 },
          { title: "Mole Concept", downloads: 168 }
        ]
      },
      {
        chapter: "Structure of Atom",
        notes: [
          { title: "Atomic Models", downloads: 142 },
          { title: "Quantum Numbers", downloads: 129 }
        ]
      },
      {
        chapter: "Chemical Bonding",
        notes: [
          { title: "Ionic and Covalent Bonds", downloads: 173 },
          { title: "Molecular Orbital Theory", downloads: 115 }
        ]
      }
    ],
    "12": [
      {
        chapter: "Solid State",
        notes: [
          { title: "Crystal Systems", downloads: 135 },
          { title: "Defects in Solids", downloads: 119 }
        ]
      },
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
          { title: "Nernst Equation", downloads: 127 }
        ]
      }
    ]
  },
  "Mathematics": {
    "11": [
      {
        chapter: "Sets and Functions",
        notes: [
          { title: "Sets and Relations", downloads: 172 },
          { title: "Functions and their Types", downloads: 146 }
        ]
      },
      {
        chapter: "Algebra",
        notes: [
          { title: "Complex Numbers", downloads: 158 },
          { title: "Quadratic Equations", downloads: 189 }
        ]
      },
      {
        chapter: "Coordinate Geometry",
        notes: [
          { title: "Straight Lines", downloads: 165 },
          { title: "Circles", downloads: 147 }
        ]
      }
    ],
    "12": [
      {
        chapter: "Calculus",
        notes: [
          { title: "Limits and Continuity", downloads: 193 },
          { title: "Differentiation", downloads: 204 },
          { title: "Integration", downloads: 187 }
        ]
      },
      {
        chapter: "Vectors and 3D Geometry",
        notes: [
          { title: "Vectors in Space", downloads: 156 },
          { title: "Planes and Lines in 3D", downloads: 143 }
        ]
      },
      {
        chapter: "Probability",
        notes: [
          { title: "Probability Basics", downloads: 178 },
          { title: "Random Variables and Distributions", downloads: 137 }
        ]
      }
    ]
  }
};

export const NotesTab = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  // View subject details function
  const viewSubject = (subject: string) => {
    setSelectedSubject(subject);
  };

  // Go back to subject list
  const goBack = () => {
    setSelectedSubject(null);
  };

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
                  Comprehensive {subject.toLowerCase()} notes covering all JEE topics with solved examples.
                </p>
                <DownloadButton
                  fileName={`jee_${subject.toLowerCase()}_notes.pdf`}
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
              <ChevronLeft className="h-4 w-4 mr-2" /> Back to Subjects
            </ButtonCustom>
            <h2 className="text-2xl font-bold">{selectedSubject} Notes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Class 11 Section */}
            <CardCustom glass>
              <CardHeader>
                <CardTitle>Class 11 Chapters</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {subjectsData[selectedSubject as keyof typeof subjectsData]["11"].map((chapter, idx) => (
                    <AccordionItem key={idx} value={`class-11-chapter-${idx}`}>
                      <AccordionTrigger className="hover:bg-secondary/10 px-4 rounded-md">
                        {chapter.chapter}
                      </AccordionTrigger>
                      <AccordionContent className="px-4">
                        <div className="space-y-3 mt-2">
                          {chapter.notes.map((note, noteIdx) => (
                            <div key={noteIdx} className="flex items-center justify-between p-3 bg-secondary/5 rounded-md">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-primary" />
                                <span>{note.title}</span>
                              </div>
                              <DownloadButton
                                fileName={`jee_${selectedSubject.toLowerCase()}_${chapter.chapter.toLowerCase().replace(/\s+/g, '_')}_${note.title.toLowerCase().replace(/\s+/g, '_')}.pdf`}
                                initialCount={note.downloads}
                              />
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
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
                  {subjectsData[selectedSubject as keyof typeof subjectsData]["12"].map((chapter, idx) => (
                    <AccordionItem key={idx} value={`class-12-chapter-${idx}`}>
                      <AccordionTrigger className="hover:bg-secondary/10 px-4 rounded-md">
                        {chapter.chapter}
                      </AccordionTrigger>
                      <AccordionContent className="px-4">
                        <div className="space-y-3 mt-2">
                          {chapter.notes.map((note, noteIdx) => (
                            <div key={noteIdx} className="flex items-center justify-between p-3 bg-secondary/5 rounded-md">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-primary" />
                                <span>{note.title}</span>
                              </div>
                              <DownloadButton
                                fileName={`jee_${selectedSubject.toLowerCase()}_${chapter.chapter.toLowerCase().replace(/\s+/g, '_')}_${note.title.toLowerCase().replace(/\s+/g, '_')}.pdf`}
                                initialCount={note.downloads}
                              />
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </CardCustom>
          </div>
        </div>
      )}
    </>
  );
};
