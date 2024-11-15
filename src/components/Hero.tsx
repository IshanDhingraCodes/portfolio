import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <section className="pb-20 pt-36 ">
      {/* spotlight */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Gridbackground */}
      <div
        className="h-screen w-full dark:background  dark:bg-grid-white/[0.03] bg-grid-black/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background
         bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* center content */}

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center max-w-80 dark:text-blue-100 text-blue-600 ">
            Dynamic Web Magic
          </p>
          <TextGenerateEffect
            words={"Transforming Concepts into Seamless User Experiences"}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="md:text-lg lg:text-2xl mb-4 text-xs text-center md:tracking-wider dark:text-[#E4ECFF] text-black">
            Hi! I&apos;m Ishan Dhingra, a Frontend Developer based in India.
          </p>
          {/* resume download button */}
          <a href="/Ishan.pdf" target="_blank">
            <MagicButton title={"My Resume"} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
