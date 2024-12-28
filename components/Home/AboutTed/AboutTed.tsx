/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
"use client";

import { bebasNeue, inter } from "@/app/font";
import { FaFacebookF, FaPlay,FaTwitter } from "react-icons/fa";

const AboutTEDSection = () => {
  return (
    <section className="bg-[#FFFFFF] flex flex-col md:flex-row justify-between items-center px-[16px] py-[60px] md:px-[50px] lg:px-[100px]  md:py-[100px] gap-8">
      {/* Left Side: Image with Overlay Play Button */}
      <div className="relative group w-full md:w-[50%] flex justify-center">
        <img
          src="/aboutted.png"
          alt="TED Logo"
          className="w-full max-w-[532px] h-auto rounded-2xl"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-[58px] h-[58px] flex items-center justify-center bg-black bg-opacity-50 rounded-full border border-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            <FaPlay className="text-white text-[16px]" />
          </div>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-[50%] flex flex-col gap-[42px] sm:text-center md:text-left">
        <div className="flex flex-col gap-[24px]">
          <div>
            <h3
              className={`${bebasNeue.className} text-[#111111] text-[14px] md:text-[16px] uppercase font-[400] leading-[19.2px]`}
            >
              About TED
            </h3>
            <h2
              className={`${inter.variable} mt-[12px] text-[20px] md:text-[24px] text-[#1A1A1A] font-[600] leading-[28.8px] md:leading-[33.6px]`}
            >
             TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. 
            </h2>
          </div>
          <div>
            <p
              className={`${inter.variable} text-base text-[14px] md:text-[16px] text-[#111111] font-[400] leading-[160%] tracking-[-0.16px]`}
            >
             The two annual TED Conferences invite the world’s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan, and Daniel Kahneman
            </p>
           
          </div>
          <div>
          <p
              className={`${inter.variable} text-base text-[14px] md:text-[16px] text-[#111111] font-[400] leading-[160%] tracking-[-0.16px]`}
            >
            The annual TED Conference takes place each spring in Vancouver, British Columbia. TED’s media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self-organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
      {/* Follow Text */}
      <span className="text-[14px] md:text-[16px] font-medium text-[#333]">
        Follow Text
      </span>

      {/* Social Media Icons */}
      <div className="flex flex-row gap-[32px]">
      {/* Twitter Icon */}
      <a
        href="https://twitter.com" // Replace with your desired Twitter link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[40px] h-[40px] border border-gray-400 rounded-md hover:shadow-lg transition-shadow"
      >
        <FaTwitter className="text-black text-[20px]" />
      </a>

      {/* Facebook Icon */}
      <a
        href="https://facebook.com" // Replace with your desired Facebook link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[40px] h-[40px] border border-gray-400 rounded-md hover:shadow-lg transition-shadow"
      >
        <FaFacebookF className="text-[#1877F2] text-[20px]" />
      </a>
    </div>
    </div>
      </div>
    </section>
  );
};

export default AboutTEDSection;
