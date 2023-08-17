"use client";

import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

import { getHeader } from "@/api/getHeader";
import GlobalIcons from "@/img/icons";
import BoundingBox from "../boundingBox";
import Image from "next/image";
import GlobalProfile from "@/img/profile";

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
      <BoundingBox className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start">
          <GlobalIcons.logo className="fill-primary w-28 mx-4" />
          {tags.map((tag, index) => (
            <div
              key={index}
              className="p-3 h-full hover:bg-black flex items-center justify-center opacity-90 hover:opacity-100 cursor-pointer"
            >
              <p className="text-white text-[14px]">{tag}</p>
              <MdArrowDropDown className="fill-white" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <AiOutlineSearch className="fill-white text-2xl" />
          <BsBookmark className="fill-white text-1xl ml-8" />
          <Image
            src={GlobalProfile.loid}
            className="rounded-full ml-8"
            alt="profile"
            width={33}
            height={33}
          />
          <MdArrowDropDown className="fill-white text-xl ml-2" />
        </div>
      </BoundingBox>
    </header>
  );
}
