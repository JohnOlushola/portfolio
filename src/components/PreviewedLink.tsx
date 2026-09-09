"use client";

import React, { useCallback, useState } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface PreviewedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asset?: string;
  internal?: boolean;
}

/** Matches the w-96 on the preview, used to keep it inside the viewport. */
const PREVIEW_WIDTH = 384;
/** Breathing room between the cursor and the preview. */
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
  // Null until the pointer reports a real position. Seeding this with {0, 0}
  // renders the preview in the top-left corner for a frame before the first
  // mousemove lands, which reads as a flash.
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

  // Keyboard focus pins the preview near the top of the viewport, a pointer
  // anchors it to the cursor. Both are viewport coordinates, which is why the
  // preview is positioned `fixed` rather than `absolute`. Under `absolute` the
  // offset parent is the document, so the preview drifted by exactly the
  // scroll offset and ended up offscreen on any scrolled page.
  //
  // Only ever called on the client: `cursor` needs a mouse event and
  // `focusedLink` a focus event, so neither is set during SSR.
  const getPreviewStyle = (): React.CSSProperties => {
    if (focusedLink || !cursor) {
      return { top: 100, left: "50%", transform: "translateX(-50%)" };
    }

    // clientWidth/clientHeight rather than innerWidth/innerHeight so the
    // preview is not tucked underneath a classic scrollbar.
    const { clientWidth, clientHeight } = document.documentElement;
    const halfWidth = PREVIEW_WIDTH / 2;
    const left = Math.min(
      Math.max(cursor.x, halfWidth + VIEWPORT_MARGIN),
      clientWidth - halfWidth - VIEWPORT_MARGIN
    );

    // Flip below the cursor in the top half of the viewport. Paired with the
    // max-h-[45vh] on the media, the chosen side always has room, so the
    // preview never needs its height measured to be placed correctly.
    return cursor.y < clientHeight / 2
      ? { left, top: cursor.y + CURSOR_GAP, transform: "translateX(-50%)" }
      : {
          left,
          // Anchoring the bottom edge lets it grow upwards, so it sits right
          // whatever the asset's aspect ratio turns out to be.
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
