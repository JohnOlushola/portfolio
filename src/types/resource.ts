import { HTMLAttributeAnchorTarget } from "react";

export enum ResourceType {
  Prototype = "View Prototype",
  Website = "View Website",
  Post = "Read Post",
}

export interface Resource {
  src: string;
  title?: string;
  date?: string;
  type?: keyof typeof ResourceType;
  link?: {
    url: string;
    target?: HTMLAttributeAnchorTarget;
  };
}
