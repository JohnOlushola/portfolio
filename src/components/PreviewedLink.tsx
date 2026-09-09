"use client";

import React, { useCallback, useState } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface PreviewedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asset?: string;
  internal?: boolean;
}

const PREVIEW_WIDTH = 384;
const CURSOR_GAP = 16;
const VIEWPORT_MARGIN = 8;

type CursorPosition = { x: number; y: number };

export default function PreviewedLink({
  asset,
  href,
  children,
  className,
  internal,
  ...rest
}: PreviewedLinkProps) {
  const [focusedLink, setFocusedLink] = useState(false);
  const [cursor, setCursor] = useState<CursorPosition | null>(null);

  // Check if the path includes known video patterns (e.g., Cloudinary format)
  const isVideo =
    asset?.includes("/video/") || /\.(mp4|webm|ogg|mov)$/i.test(asset || "");

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    setCursor({ x: event.clientX, y: event.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => setCursor(null), []);

  const props = {
    target: "_blank",
    rel: "noopener noreferrer",
    className: cn("underline-offset-4 text-muted-foreground", className),
    onFocus: () => setFocusedLink(true),
    onBlur: () => setFocusedLink(false),
    children,
    ...rest,
  };

  const getPreviewStyle = (): React.CSSProperties => {
    if (focusedLink || !cursor) {
      return { top: 100, left: "50%", transform: "translateX(-50%)" };
    }

    const { clientWidth, clientHeight } = document.documentElement;
    const halfWidth = PREVIEW_WIDTH / 2;
    const left = Math.min(
      Math.max(cursor.x, halfWidth + VIEWPORT_MARGIN),
      clientWidth - halfWidth - VIEWPORT_MARGIN
    );

    return cursor.y < clientHeight / 2
      ? { left, top: cursor.y + CURSOR_GAP, transform: "translateX(-50%)" }
      : {
          left,
          bottom: clientHeight - cursor.y + CURSOR_GAP,
          transform: "translateX(-50%)",
        };
  };

  const showPreview = asset && (focusedLink || cursor !== null);

  return (
    <span
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setFocusedLink(true)}
      onBlur={() => setFocusedLink(false)}
    >
      {internal ? (
        <Link {...props} href={href as string} />
      ) : (
        <a {...props} href={href} />
      )}

      {showPreview && (
        <span
          aria-hidden="true"
          className="hidden md:block fixed w-96 rounded pointer-events-none z-50"
          style={getPreviewStyle()}
        >
          {isVideo ? (
            <video
              src={asset}
              muted
              loop
              autoPlay
              playsInline
              controls={false}
              className="w-full h-auto max-h-[45vh] object-contain rounded"
            />
          ) : (
            <img
              src={asset}
              alt=""
              className="w-full h-auto max-h-[45vh] object-contain rounded"
            />
          )}
        </span>
      )}
    </span>
  );
}
