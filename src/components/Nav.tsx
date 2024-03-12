import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SideNav() {
  return (
    <div className="fixed left-0 top-0 border-r h-screen w-[60px]">
      <div className="flex flex-col h-full justify-center align-middle">
        <ul className="space-y-5 mx-auto">
          <li>
            <Avatar>
              <AvatarImage src="/images/avatar.jpeg" alt="jtolushola" />
              <AvatarFallback>TO</AvatarFallback>
            </Avatar>
          </li>
          <li>i</li>
          <li>i</li>
          <li>i</li>
          <li>i</li>
        </ul>
      </div>
    </div>
  );
}
