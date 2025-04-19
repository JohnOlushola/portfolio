import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface PreviewedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asset: string;
}

export default function PreviewedLink({
  asset,
  href,
  children,
  className,
  ...rest
}: PreviewedLinkProps) {
  const [hoveredLink, setHoveredLink] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const isVideo = (url: string) => {
    // Check if the path includes known video patterns (e.g., Cloudinary format)
    if (url.includes("/video/")) return true;
    return /\.(mp4|webm|ogg|mov)$/i.test(url);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <span
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredLink(false)}
    >
      <a
        href={href}
        {...rest}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("underline-offset-4 text-muted-foreground", className)}
        onMouseEnter={() => setHoveredLink(true)}
        onMouseLeave={() => setHoveredLink(false)}
      >
        {children}
      </a>

      {hoveredLink && (
        <div
          className="hidden md:block absolute w-96 h-auto rounded pointer-events-none"
          style={{
            top: cursorPosition.y - 260,
            left: cursorPosition.x - 125,
          }}
        >
          {isVideo(asset) ? (
            <video
              src={asset}
              muted
              loop
              autoPlay
              controls={false}
              className="w-full h-full rounded"
            />
          ) : (
            <img
              src={asset}
              alt={href}
              className="w-full h-full object-contain rounded"
            />
          )}
        </div>
      )}
    </span>
  );
}
