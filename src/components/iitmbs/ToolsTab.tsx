
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Calculator } from "lucide-react";

export const ToolsTab = () => {
  const tools = [
    {
      title: "Grade Calculator",
      description: "Calculate your grades based on assignments and exams",
      icon: Calculator
    },
    {
      title: "Marks Predictor",
      description: "Predict your final marks based on current performance",
      icon: Calculator
    },
    {
      title: "CGPA Calculator",
      description: "Calculate your Cumulative Grade Point Average",
      icon: Calculator
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <CardCustom key={tool.title} glass hover className="group">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <tool.icon className="h-5 w-5" />
              {tool.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {tool.description}
            </p>
            <ButtonCustom 
              variant="outline"
              fullWidth
            >
              Open Tool
            </ButtonCustom>
          </CardContent>
        </CardCustom>
      ))}
    </div>
  );
};
