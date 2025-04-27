
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { FileQuestion, Download } from "lucide-react";

export const PreviousYearTab = () => {
  const pyqs = [
    { year: "2023", questions: 180 },
    { year: "2022", questions: 180 },
    { year: "2021", questions: 180 },
    { year: "2020", questions: 180 },
    { year: "2019", questions: 180 },
    { year: "2018", questions: 180 }
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
            <ButtonCustom 
              variant="outline"
              icon={<Download className="h-4 w-4" />}
              iconPosition="right"
            >
              Download PYQ
            </ButtonCustom>
          </CardContent>
        </CardCustom>
      ))}
    </div>
  );
};
