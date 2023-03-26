"use client";
import { useState } from "react";
import { MoodTypes, moods } from "./data";
import EmojiButton from "./EmojiButton";

const moodEmojis = ["😊", "😒", "🤔", "🤗", "😲"] as const;

const MoodPicker = () => {
  const [mood, setMood] = useState<MoodTypes>("😊");
  return (
    <div className="max-w-3xl mx-2 md:mx-auto px-5 bg-white mt-3">
      <div className="py-1">
        <p className="text-lg text-slate-600">How are you feeling now?</p>
      </div>
      <div className="flex items-center gap-2">
        {moodEmojis.map((m, i) => (
          <EmojiButton key={i} mood={m} />
        ))}
      </div>
    </div>
  );
};

export default MoodPicker;
