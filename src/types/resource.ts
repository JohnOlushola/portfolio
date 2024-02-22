import { ImageLoader } from "next/image";
import { HTMLAttributeAnchorTarget } from "react";

export enum ResourceType {
  Prototype = "View Prototype",
  Website = "View Website",
  Post = "Read Post",
}

export interface Resource {
  src: string;
  title?: string;
  date?: number;
  description?: string;
  type?: keyof typeof ResourceType;
  media?: "video" | "image" | "text";
  alt?: string;
  link?: {
    url: string;
    external?: boolean;
  };
  imageLoader?: ImageLoader;
}

export interface PictureResource extends Resource {
  media: "image";
  alt: string;
}
