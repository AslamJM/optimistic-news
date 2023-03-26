"use client";

import type { MoodTypes } from "@/components/home/data";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface MoodState {
  current: MoodTypes | null;
  setCurrent: Dispatch<SetStateAction<"😊" | "😒" | "🤔" | "🤗" | "😲" | null>>;
}

export const moodContext = createContext<MoodState>({
  current: null,
  setCurrent: () => {},
});

export const useMoodContext = () => useContext(moodContext);

export const MoodProvider = ({ children }: { children: ReactNode }) => {
  const [mood, setMood] = useState<MoodTypes | null>(null);
  return (
    <moodContext.Provider value={{ current: mood, setCurrent: setMood }}>
      {children}
    </moodContext.Provider>
  );
};
