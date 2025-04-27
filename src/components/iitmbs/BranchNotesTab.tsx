
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { FileText, Download } from "lucide-react";

export const BranchNotesTab = () => {
  const branches = [
    {
      title: "Data Science",
      subjects: ["Programming", "Statistics", "Machine Learning"]
    },
    {
      title: "Electronic Systems",
      subjects: ["Digital Electronics", "Circuit Theory", "Signal Processing"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {branches.map((branch) => (
        <CardCustom key={branch.title} glass className="col-span-1">
          <CardHeader>
            <CardTitle>{branch.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {branch.subjects.map((subject) => (
                <div key={subject} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>{subject}</span>
                  </div>
                  <ButtonCustom 
                    variant="outline"
                    size="sm"
                    icon={<Download className="h-4 w-4" />}
                    iconPosition="right"
                  >
                    Download
                  </ButtonCustom>
                </div>
              ))}
            </div>
          </CardContent>
        </CardCustom>
      ))}
    </div>
  );
};
