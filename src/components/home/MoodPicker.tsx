"use client";
import { useMoodContext } from "@/context/global";
import EmojiButton from "./EmojiButton";

const moodEmojis = ["😊", "😒", "🤔", "🤗", "😲"] as const;

const MoodPicker = () => {
  const { current } = useMoodContext();
  return (
    <div className="max-w-3xl mx-2 md:mx-auto px-5 py-3 bg-white mt-3 rounded-sm">
      <div className="py-1">
        <p className="text-lg text-slate-600">
          {current ? `you're feeling ${current}` : `How are you feeling now?`}
        </p>
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
