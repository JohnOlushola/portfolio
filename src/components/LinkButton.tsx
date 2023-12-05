import { HTMLAttributeAnchorTarget } from "react";

interface LinkButtonProps {
  text: string;
  target?: HTMLAttributeAnchorTarget;
}

export default function LinkButton({ text }: LinkButtonProps) {
  return <div className="w-full mt-1 p-2 rounded-lg flex justify-center bg-[#282828] relative">{text}</div>;
}
