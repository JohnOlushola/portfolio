import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import {
  FrameIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Tooltip from "@/components/ui/Tooltip";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

export default function SideNav() {
  const { pathname } = useRouter();

  return (
    <div className="fixed left-0 top-0 border-r h-screen w-[60px]">
      <div className="flex flex-col h-full justify-center align-middle items-center">
        <ul className="space-y-7 mx-auto w-auto">
          <li>
            <Link href="/">
              <Tooltip
                content="Holla"
                trigger={
                  <Avatar
                    className={cn(
                      pathname === "/" ? "grayscale-0" : "grayscale",
                      "h-5 w-5"
                    )}
                  >
                    <AvatarImage src="/images/avatar.jpeg" alt="jtolushola" />
                    <AvatarFallback>TO</AvatarFallback>
                  </Avatar>
                }
              />
            </Link>
          </li>
          <li>
            <Link href="/craft">
              <Tooltip
                content="Craft"
                trigger={
                  <FrameIcon
                    className={cn(
                      pathname.includes("/craft")
                        ? "opacity-100"
                        : "opacity-60",
                      "h-5 w-5"
                    )}
                  />
                }
              />
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/JohnOlushola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="h-5 w-5 opacity-60" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jtolushola/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogoIcon className="h-5 w-5 opacity-60" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
