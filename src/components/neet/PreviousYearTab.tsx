
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
        name: "Set P", 
        fileName: "neet_2023_set_p.pdf",
        downloads: 342
      },
      { 
        name: "Set Q", 
        fileName: "neet_2023_set_q.pdf",
        downloads: 315
      },
      { 
        name: "Set R", 
        fileName: "neet_2023_set_r.pdf",
        downloads: 289
      },
      { 
        name: "Set S", 
        fileName: "neet_2023_set_s.pdf",
        downloads: 267
      }
    ]
  },
  "2022": {
    sets: [
      { 
        name: "Set V", 
        fileName: "neet_2022_set_v.pdf",
        downloads: 289
      },
      { 
        name: "Set W", 
        fileName: "neet_2022_set_w.pdf",
        downloads: 271
      },
      { 
        name: "Set X", 
        fileName: "neet_2022_set_x.pdf",
        downloads: 248
      },
      { 
        name: "Set Y", 
        fileName: "neet_2022_set_y.pdf",
        downloads: 231
      }
    ]
  },
  "2021": {
    sets: [
      { 
        name: "Set M", 
        fileName: "neet_2021_set_m.pdf",
        downloads: 253
      },
      { 
        name: "Set N", 
        fileName: "neet_2021_set_n.pdf",
        downloads: 234
      },
      { 
        name: "Set O", 
        fileName: "neet_2021_set_o.pdf",
        downloads: 219
      },
      { 
        name: "Set P", 
        fileName: "neet_2021_set_p.pdf",
        downloads: 201
      }
    ]
  },
  "2020": {
    sets: [
      { 
        name: "Set F", 
        fileName: "neet_2020_set_f.pdf",
        downloads: 217
      },
      { 
        name: "Set G", 
        fileName: "neet_2020_set_g.pdf",
        downloads: 204
      },
      { 
        name: "Set H", 
        fileName: "neet_2020_set_h.pdf",
        downloads: 186
      },
      { 
        name: "Set J", 
        fileName: "neet_2020_set_j.pdf",
        downloads: 169
      }
    ]
  },
  "2019": {
    sets: [
      { 
        name: "Set P", 
        fileName: "neet_2019_set_p.pdf",
        downloads: 185
      },
      { 
        name: "Set Q", 
        fileName: "neet_2019_set_q.pdf",
        downloads: 173
      },
      { 
        name: "Set R", 
        fileName: "neet_2019_set_r.pdf",
        downloads: 168
      },
      { 
        name: "Set S", 
        fileName: "neet_2019_set_s.pdf",
        downloads: 154
      }
    ]
  },
  "2018": {
    sets: [
      { 
        name: "Set A", 
        fileName: "neet_2018_set_a.pdf",
        downloads: 156
      },
      { 
        name: "Set B", 
        fileName: "neet_2018_set_b.pdf",
        downloads: 147
      },
      { 
        name: "Set C", 
        fileName: "neet_2018_set_c.pdf",
        downloads: 139
      },
      { 
        name: "Set D", 
        fileName: "neet_2018_set_d.pdf",
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
                  NEET {year} PYQ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {pyqData[year as keyof typeof pyqData].sets.length} sets with detailed solutions and explanations.
                </p>
                <DownloadButton
                  fileName={`neet_${year}_all_sets.pdf`}
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
            <h2 className="text-2xl font-bold">NEET {selectedYear} Previous Year Sets</h2>
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
                    NEET {selectedYear} paper with solutions.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{set.downloads} downloads</span>
                    <DownloadButton
                      fileName={set.fileName}
                      initialCount={set.downloads}
                    />
                  </div>
                </CardContent>
              </CardCustom>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
