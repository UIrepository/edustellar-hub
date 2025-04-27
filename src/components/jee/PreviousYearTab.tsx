
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { FileQuestion } from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";

export const PreviousYearTab = () => {
  const pyqs = [
    { year: "2023", questions: 180, downloads: 342 },
    { year: "2022", questions: 180, downloads: 289 },
    { year: "2021", questions: 180, downloads: 253 },
    { year: "2020", questions: 180, downloads: 217 },
    { year: "2019", questions: 180, downloads: 185 },
    { year: "2018", questions: 180, downloads: 156 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pyqs.map((pyq) => (
        <CardCustom key={pyq.year} glass hover>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileQuestion className="h-5 w-5" />
              JEE {pyq.year} PYQ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {pyq.questions} questions with detailed solutions and explanations.
            </p>
            <DownloadButton
              fileName={`jee_${pyq.year}_pyq.pdf`}
              label="Download PYQ"
              initialCount={pyq.downloads}
            />
          </CardContent>
        </CardCustom>
      ))}
    </div>
  );
};
