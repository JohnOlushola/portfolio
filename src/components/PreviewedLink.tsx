import React, { useState } from "react";

interface PreviewedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asset: string;
}

export default function PreviewedLink({
  asset,
  href,
  children,
  ...rest
}: PreviewedLinkProps) {
  const [hoveredLink, setHoveredLink] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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
        onMouseEnter={() => setHoveredLink(true)}
        onMouseLeave={() => setHoveredLink(false)}
      >
        {children}
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
    </span>
  );
}
