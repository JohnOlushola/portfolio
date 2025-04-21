"use client";

import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { useState } from "react";

interface PreviewedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asset?: string;
  internal?: boolean;
}

export default function PreviewedLink({
  asset,
  href,
  children,
  className,
  internal,
  ...rest
}: PreviewedLinkProps) {
  const [hoveredLink, setHoveredLink] = useState(false);
  const [focusedLink, setFocusedLink] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Check if the path includes known video patterns (e.g., Cloudinary format)
  const isVideo =
    asset?.includes("/video/") || /\.(mp4|webm|ogg|mov)$/i.test(asset || "");

  const handleMouseMove = (event: React.MouseEvent) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const props = {
    target: "_blank",
    rel: "noopener noreferrer",
    className: cn("underline-offset-4 text-muted-foreground", className),
    onMouseEnter: () => setHoveredLink(true),
    onMouseLeave: () => setHoveredLink(false),
    onFocus: () => setFocusedLink(true),
    onBlur: () => setFocusedLink(false),
    children,
    ...rest,
  };

  return (
    <span
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredLink(false)}
      onFocus={() => setFocusedLink(true)}
      onBlur={() => setFocusedLink(false)}
    >
      {internal ? (
        <Link {...props} href={href as Url} />
      ) : (
        <a {...props} href={href} />
      )}

      {/* <Link {...props} href={href as Url} /> */}

      {(hoveredLink || focusedLink) && asset && (
        <span
          className="hidden md:block absolute w-96 h-auto rounded pointer-events-none"
          style={{
            top: focusedLink ? 100 : cursorPosition.y - 260,
            left: focusedLink ? "50%" : cursorPosition.x - 125,
            transform: focusedLink ? "translateX(-50%)" : "none",
          }}
        >
          {isVideo ? (
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
        </span>
      )}
    </span>
  );
}
