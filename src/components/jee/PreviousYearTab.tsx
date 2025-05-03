
import { useState } from "react";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { FileQuestion, ChevronLeft } from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";
import { ButtonCustom } from "@/components/ui/button-custom";

// PYQ data structure
const pyqData = {
  "2023": {
    sets: [
      { 
        name: "Set A", 
        fileName: "jee_2023_set_a.pdf",
        downloads: 342
      },
      { 
        name: "Set B", 
        fileName: "jee_2023_set_b.pdf",
        downloads: 315
      },
      { 
        name: "Set C", 
        fileName: "jee_2023_set_c.pdf",
        downloads: 289
      },
      { 
        name: "Set D", 
        fileName: "jee_2023_set_d.pdf",
        downloads: 267
      }
    ]
  },
  "2022": {
    sets: [
      { 
        name: "Set A", 
        fileName: "jee_2022_set_a.pdf",
        downloads: 289
      },
      { 
        name: "Set B", 
        fileName: "jee_2022_set_b.pdf",
        downloads: 271
      },
      { 
        name: "Set C", 
        fileName: "jee_2022_set_c.pdf",
        downloads: 248
      },
      { 
        name: "Set D", 
        fileName: "jee_2022_set_d.pdf",
        downloads: 231
      }
    ]
  },
  "2021": {
    sets: [
      { 
        name: "Set A", 
        fileName: "jee_2021_set_a.pdf",
        downloads: 253
      },
      { 
        name: "Set B", 
        fileName: "jee_2021_set_b.pdf",
        downloads: 234
      },
      { 
        name: "Set C", 
        fileName: "jee_2021_set_c.pdf",
        downloads: 219
      },
      { 
        name: "Set D", 
        fileName: "jee_2021_set_d.pdf",
        downloads: 201
      }
    ]
  },
  "2020": {
    sets: [
      { 
        name: "Set A", 
        fileName: "jee_2020_set_a.pdf",
        downloads: 217
      },
      { 
        name: "Set B", 
        fileName: "jee_2020_set_b.pdf",
        downloads: 204
      },
      { 
        name: "Set C", 
        fileName: "jee_2020_set_c.pdf",
        downloads: 186
      },
      { 
        name: "Set D", 
        fileName: "jee_2020_set_d.pdf",
        downloads: 169
      }
    ]
  },
  "2019": {
    sets: [
      { 
        name: "Set A", 
        fileName: "jee_2019_set_a.pdf",
        downloads: 185
      },
      { 
        name: "Set B", 
        fileName: "jee_2019_set_b.pdf",
        downloads: 173
      },
      { 
        name: "Set C", 
        fileName: "jee_2019_set_c.pdf",
        downloads: 168
      },
      { 
        name: "Set D", 
        fileName: "jee_2019_set_d.pdf",
        downloads: 154
      }
    ]
  },
  "2018": {
    sets: [
      { 
        name: "Set A", 
        fileName: "jee_2018_set_a.pdf",
        downloads: 156
      },
      { 
        name: "Set B", 
        fileName: "jee_2018_set_b.pdf",
        downloads: 147
      },
      { 
        name: "Set C", 
        fileName: "jee_2018_set_c.pdf",
        downloads: 139
      },
      { 
        name: "Set D", 
        fileName: "jee_2018_set_d.pdf",
        downloads: 127
      }
    ]
  }
};

export const PreviousYearTab = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const years = Object.keys(pyqData);

  // View year details function
  const viewYear = (year: string) => {
    setSelectedYear(year);
  };

  // Go back to year list
  const goBack = () => {
    setSelectedYear(null);
  };

  return (
    <>
      {!selectedYear ? (
        // Year selection view
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {years.map((year) => (
            <CardCustom key={year} glass hover onClick={() => viewYear(year)}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileQuestion className="h-5 w-5" />
                  JEE {year} PYQ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {pyqData[year as keyof typeof pyqData].sets.length} sets with detailed solutions and explanations.
                </p>
                <DownloadButton
                  fileName={`jee_${year}_all_sets.pdf`}
                  label="Download All Sets"
                  initialCount={pyqData[year as keyof typeof pyqData].sets.reduce((total, set) => total + set.downloads, 0) / pyqData[year as keyof typeof pyqData].sets.length}
                />
              </CardContent>
            </CardCustom>
          ))}
        </div>
      ) : (
        // Year details view with sets
        <div>
          <div className="mb-6">
            <ButtonCustom
              variant="outline"
              className="mb-4"
              onClick={goBack}
            >
              <ChevronLeft className="h-4 w-4 mr-2" /> Back to Years
            </ButtonCustom>
            <h2 className="text-2xl font-bold">JEE {selectedYear} Previous Year Sets</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {pyqData[selectedYear as keyof typeof pyqData].sets.map((set, idx) => (
              <CardCustom key={idx} glass>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileQuestion className="h-5 w-5" />
                    {set.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    JEE {selectedYear} paper with solutions.
                  </p>
                  <DownloadButton
                    fileName={set.fileName}
                    label="Download PYQ"
                    initialCount={set.downloads}
                  />
                </CardContent>
              </CardCustom>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
