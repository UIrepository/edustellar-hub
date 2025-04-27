
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { FileText } from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";

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
            <DownloadButton
              fileName={`jee_${subject.toLowerCase()}_notes.pdf`}
              label="Download Notes"
              initialCount={Math.floor(Math.random() * 200) + 50}
            />
          </CardContent>
        </CardCustom>
      ))}
    </div>
  );
};
