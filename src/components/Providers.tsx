"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { MoodProvider } from "@/context/global";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <MoodProvider>{children}</MoodProvider>
    </SessionProvider>
  );
}
