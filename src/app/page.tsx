"use client";
import HomeComponent from "@/components/home";

import { Inter } from "next/font/google";
import LandingPage from "@/components/LandingPage";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: sessionData } = useSession();
  return (
    <main className={inter.className}>
      {sessionData ? (
        <div>
          <HomeComponent />
        </div>
      ) : (
        <LandingPage />
      )}
    </main>
  );
}
