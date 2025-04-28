
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { FileText } from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";

export const SubjectPage = () => {
  const { subjectId } = useParams();
  const subjectName = subjectId?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Example notes - in a real app, these would come from your data source
  const subjectNotes = [
    { title: "Complete Course Notes", downloads: 156 },
    { title: "Lecture Slides", downloads: 89 },
    { title: "Practice Problems", downloads: 123 },
    { title: "Quick Reference Guide", downloads: 67 },
    { title: "Past Exam Solutions", downloads: 145 }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{subjectName}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjectNotes.map((note, index) => (
          <CardCustom key={index} glass>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                {note.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <DownloadButton 
                  fileName={`${subjectId}_${note.title.toLowerCase().replace(/\s+/g, '_')}.pdf`}
                  initialCount={note.downloads}
                />
              </div>
            </CardContent>
          </CardCustom>
        ))}
      </div>
    </div>
  );
};
