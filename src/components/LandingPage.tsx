"use client";

import Image from "next/image";
import SignInButton from "./button/SignInButton";

const LandingPage = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center md:justify-between mx-auto w-full md:w-11/12 lg:w-10/12 xl:w-9/12 p-2">
        <div className="order-2 md:order-1 md:w-1/2 flex flex-col justify-center md:justify-start">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold underline underline-offset-4 text-gray-800 leading-tight mb-4 invisble md:visible">
              MoodFeed.
            </h1>
            <p className="text-md md:text-lg text-gray-600 mb-4 text-justify md:text-left px-4 md:px-1">
              Welcome to{" "}
              <span className="text-slate-800 font-bold">MoodFeed</span> - the
              only news platform that recommends stories based on your mood. Our
              Mood-Based News feature uses the latest sentiment analysis
              technology to analyze your mood and deliver personalized news
              recommendations tailored to your emotional state. Whether you are
              feeling happy, sad, angry, or anything in between, our platform
              will curate the latest news stories that match your mood. With{" "}
              <span className="text-slate-800 font-bold">MoodFeed</span>, you
              can stay informed while also taking care of your mental
              well-being.
            </p>
          </div>
          <SignInButton />
        </div>
        <div className="order-1 md:order-2 mt-8 md:mt-0 md:w-1/2 mx-auto rounded-full flex items-center justify-center">
          <Image
            src="/images/landing.png"
            width={400}
            height={400}
            alt="landing"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
