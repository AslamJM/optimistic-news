"use client";

import { useState } from "react";
import Icons from "@/icons";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  const [loading, setLoading] = useState(false);

  const signInHandler = async () => {
    setLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className="bg-slate-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center w-[200] mx-auto  mb-1">
      {!loading && <Icons.Google />}
      <span className="ml-2" onClick={signInHandler}>
        {loading ? "Singin In...." : "Sign In with Google"}
      </span>
    </button>
  );
};

export default SignInButton;
