
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CardCustom, CardHeader, CardTitle, CardContent } from "@/components/ui/card-custom";
import { FileText, Send, Filter } from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type NoteType = "all" | "pdf" | "video" | "summary";

export const SubjectPage = () => {
  const { subjectId } = useParams();
  const [selectedType, setSelectedType] = useState<NoteType>("all");
  const subjectName = subjectId?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Example notes with tags - in a real app, these would come from your data source
  const subjectNotes = [
    { 
      title: "Complete Course Notes", 
      downloads: 156, 
      type: "pdf",
      description: "Comprehensive lecture notes covering all topics in the syllabus with examples and explanations.",
      tags: ["pdf", "comprehensive"]
    },
    { 
      title: "Lecture Slides", 
      downloads: 89, 
      type: "pdf",
      description: "Slide presentations used in the lectures, condensed format with key points.", 
      tags: ["pdf", "slides"] 
    },
    { 
      title: "Video Lectures", 
      downloads: 78, 
      type: "video",
      description: "Full-length recorded video lectures explaining all concepts in detail.", 
      tags: ["video", "lectures"] 
    },
    { 
      title: "Practice Problems", 
      downloads: 123, 
      type: "pdf",
      description: "Collection of practice problems with step-by-step solutions for exam preparation.", 
      tags: ["pdf", "practice"] 
    },
    { 
      title: "Quick Reference Guide", 
      downloads: 67, 
      type: "summary",
      description: "Concise summary of all important formulas, definitions, and concepts.", 
      tags: ["summary", "quick-ref"] 
    },
    { 
      title: "Past Exam Solutions", 
      downloads: 145, 
      type: "pdf",
      description: "Solutions to previous exam papers with detailed explanations.", 
      tags: ["pdf", "exams"] 
    },
    { 
      title: "Tutorial Videos", 
      downloads: 92, 
      type: "video",
      description: "Short tutorial videos focusing on solving specific types of problems.", 
      tags: ["video", "tutorial"] 
    }
  ];

  // Filter notes based on selected type
  const filteredNotes = selectedType === "all" 
    ? subjectNotes 
    : subjectNotes.filter(note => note.type === selectedType);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{subjectName}</h1>
      
      <div className="mb-8">
        <CardCustom glass className="bg-primary/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Join the IITM BS Community</h3>
                <p className="text-sm text-muted-foreground">Get help, share resources, and connect with other students</p>
              </div>
              <ButtonCustom className="bg-blue-500 hover:bg-blue-600" size="sm">
                <Send className="h-4 w-4 mr-2" />
                Join Telegram Group
              </ButtonCustom>
            </div>
          </CardContent>
        </CardCustom>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold">{subjectName} Study Resources</h2>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filter by type:</span>
          <ToggleGroup
            type="single"
            value={selectedType}
            onValueChange={(value) => value && setSelectedType(value as NoteType)}
          >
            <ToggleGroupItem value="all" size="sm" className="px-3 py-1 text-xs">All</ToggleGroupItem>
            <ToggleGroupItem value="pdf" size="sm" className="px-3 py-1 text-xs">PDF</ToggleGroupItem>
            <ToggleGroupItem value="video" size="sm" className="px-3 py-1 text-xs">Video</ToggleGroupItem>
            <ToggleGroupItem value="summary" size="sm" className="px-3 py-1 text-xs">Summary</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <CardCustom key={index} glass>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {note.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{note.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {note.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-secondary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <DownloadButton 
                    fileName={`${subjectId}_${note.title.toLowerCase().replace(/\s+/g, '_')}.${note.type === 'video' ? 'mp4' : 'pdf'}`}
                    initialCount={note.downloads}
                  />
                </div>
              </CardContent>
            </CardCustom>
          ))
        ) : (
          <div className="col-span-2 text-center py-8 text-muted-foreground">
            No notes found matching your filter criteria.
          </div>
        )}
      </div>
    </div>
  );
};
