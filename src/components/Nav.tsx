import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import {
  FrameIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Tooltip from "./ui/tooltip";

export default function SideNav() {
  return (
    <div className="fixed left-0 top-0 border-r h-screen w-[60px]">
      <div className="flex flex-col h-full justify-center align-middle items-center">
        <ul className="space-y-7 mx-auto w-auto">
          <li>
            <Link href="/">
              <Tooltip
                content="About"
                trigger={
                  <Avatar className="h-5 w-5">
                    <AvatarImage src="/images/avatar.jpeg" alt="jtolushola" />
                    <AvatarFallback>TO</AvatarFallback>
                  </Avatar>
                }
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FrameIcon className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/JohnOlushola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-opacity-60"
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jtolushola/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-opacity-60"
            >
              <LinkedInLogoIcon className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
