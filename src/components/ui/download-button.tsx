
import { useState } from "react";
import { ButtonCustom } from "./button-custom";
import { Download } from "lucide-react";
import { Badge } from "./badge";

type DownloadButtonProps = {
  label?: string;
  initialCount?: number;
  fileName: string;
};

export const DownloadButton = ({ label = "Download", initialCount = 0, fileName }: DownloadButtonProps) => {
  const [downloadCount, setDownloadCount] = useState(initialCount);

  const handleDownload = () => {
    setDownloadCount(prevCount => prevCount + 1);
    // In a real application, this would trigger the actual download
    console.log(`Downloading ${fileName}`);
    // You could also send an API request to update the download count in a database
  };

  return (
    <div className="flex items-center gap-2">
      <ButtonCustom 
        variant="outline"
        icon={<Download className="h-4 w-4" />}
        iconPosition="right"
        onClick={handleDownload}
      >
        {label}
      </ButtonCustom>
      <Badge variant="secondary" className="text-xs">
        {downloadCount} downloads
      </Badge>
    </div>
  );
};
