import { ImageLoader } from "next/image";

export interface Resource {
  src: string;
  title?: string;
  date?: number;
  description?: React.ReactNode | string;
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
