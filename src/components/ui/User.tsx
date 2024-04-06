import Link from "next/link";
import Avatar from "./Avatar";
import { cn } from "@/lib/utils";

interface UserProps {
  username: string;
  fallback?: string;
  image?: string;
  url: string;
}

export default function User({ url, image, fallback, username }: UserProps) {
  fallback = fallback || username[0].toUpperCase();

  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center w-auto border rounded-full gap-1.5 p-1.5 py-1 no-underline"
      )}
      href={url}
    >
      <Avatar url={image} fallback={fallback} />
      {username}
    </Link>
  );
}
