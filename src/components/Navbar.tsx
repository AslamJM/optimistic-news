import Link from "next/link";
import React from "react";
import SignOutButton from "./button/SignOutButton";
import { getServerSession } from "next-auth";
import SignInButton from "./button/SignInButton";

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <nav className="bg-white shadow-lg absolute top-0 right-0 left-0 h-16">
      <div className="flex items-center justify-between px-5 py-2">
        <div>
          <h3 className="text-xl text-slate-900 font-bold">
            <span className="text-2xl">😒</span>MoodFeed
          </h3>
        </div>
        <div className="flex items-center justify-center gap-2">
          {!!session && <Link href="/settings">Settings</Link>}
          {session ? <SignOutButton /> : <SignInButton />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
