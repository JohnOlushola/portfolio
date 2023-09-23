import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between border-y border-black dark:border-white py-2.5">
      <h2 className="text-xl md:text-3xl">engineering</h2>
      <h2 className="text-xl md:text-3xl">me</h2>
      <h2 className="text-xl md:text-3xl">photography</h2>
    </div>
  );
}
