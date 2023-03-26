"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  const [loading, setLoading] = useState(false);

  const signOutHandler = async () => {
    setLoading(true);
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      className="bg-slate-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center "
      onClick={() => signOutHandler()}
    >
      {loading ? "Signing Out...." : "Sign Out"}
    </button>
  );
};

export default SignOutButton;
