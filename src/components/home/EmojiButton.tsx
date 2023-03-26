"use client";

import { useContext } from "react";
import { MoodTypes } from "./data";
import { moodContext } from "@/context/global";

type Props = {
  mood: MoodTypes;
};

const EmojiButton = ({ mood }: Props) => {
  const { setCurrent } = useContext(moodContext);
  return (
    <button
      className="flex justify-center items-center w-16 h-16 text-3xl rounded-full border-none bg-transparent cursor-pointer hover:bg-gray-100 focus:outline-none"
      onClick={() => setCurrent(mood)}
    >
      {mood}
    </button>
  );
};

export default EmojiButton;
