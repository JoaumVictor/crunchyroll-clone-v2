"use client";

import { useEffect, useState } from "react";
import { getHeader } from "@/api/getHeader";
import GlobalIcons from "@/img/icons";

export function Header() {
  const [tags, setTags] = useState<string[]>([]);

  const awaitTags = async () => {
    const tags = await getHeader();
    setTags(tags);
  };

  useEffect(() => {
    awaitTags();
  }, []);

  return (
    <header className="w-full bg-gray h-14 flex items-center justify-center">
      <GlobalIcons.logo className="fill-primary w-36" />
      {tags.map((tag, index) => (
        <div
          key={index}
          className="px-8 h-full py-4 hover:bg-black flex items-center justify-center opacity-80 hover:opacity-100"
        >
          <p className="text-white text-sm">{tag}</p>
        </div>
      ))}
    </header>
  );
}
