import React, { useState } from "react";

interface PreviewedLinkProps {
  url: string;
  label: string;
  asset: string;
}

export default function PreviewedLink({
  asset,
  label,
  url,
}: PreviewedLinkProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <a
        href={url}
        target="_blank"
        onMouseEnter={() => setHoveredLink(label)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        {label}
      </a>

      {hoveredLink && (
        <div
          className="hidden md:block absolute w-96 h-auto rounded"
          style={{
            top: cursorPosition.y - 260,
            left: cursorPosition.x - 125,
          }}
        >
          <video
            src={asset}
            muted
            loop
            autoPlay
            controls={false}
            className="w-full h-full rounded"
          />
        </div>
      )}
    </div>
  );
}
