"use client";

import { MoodTypes } from "./data";

type Props = {
  mood: MoodTypes;
};

const EmojiButton = ({ mood }: Props) => {
  return (
    <button className="flex justify-center items-center w-16 h-16 text-3xl rounded-full border-none bg-transparent cursor-pointer hover:bg-gray-100 focus:outline-none">
      {mood}
    </button>
  );
};

export default EmojiButton;
