
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { ButtonCustom } from "@/components/ui/button-custom";
import { FileText, Download } from "lucide-react";

export const NotesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {["Physics", "Chemistry", "Mathematics"].map((subject) => (
        <CardCustom key={subject} glass hover>
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
            <ButtonCustom 
              variant="outline"
              icon={<Download className="h-4 w-4" />}
              iconPosition="right"
            >
              Download Notes
            </ButtonCustom>
          </CardContent>
        </CardCustom>
      ))}
    </div>
  );
};
