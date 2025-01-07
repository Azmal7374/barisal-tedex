/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
// components/AboutSection.js

"use client";
import { bebasNeue, inter } from "@/app/font";
import { Button } from "@nextui-org/button";
const AboutSection = () => {
  return (
    <section className="bg-[#E91F23] text-white px-[16px] py-[60px] sm:py-[100px] sm:px-[100px] relative">
      <div className="mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-6">
        {/* Left Text Section */}
        <div className="md:w-2/3">
          <h2
            className={`${bebasNeue.className} text-[#FFFFFF] text-[28px] md:text-[52px] mb-4`}
          >
            ABOUT TEDx UNIVERSITY OF BARISHAL
          </h2>
          <p
            className={`${inter.variable} text-[#FFFFFF] text-[16px] md:text-[24px] mb-4`}
          >
            TEDxBarishal is an independent organization created in the spirit of
            TED’s mission, “ideas worth spreading.”
          </p>
          <div className="flex flex-col items-start gap-[24.325px] sm:pl-[160px]">
            <div>
              <p
                className={`${inter.variable} text-[14px] md:text-[18px] mt-6 sm:mb-4 font-normal `}
              >
                Our mission is to inspire and innovate within the university
                community, uncovering new ideas and to share the latest research
                in their local areas that spark conversations in their
                communities. TEDx University Of Barishal is a fully student-run
                youth organization at the University of Barishal - our mission
                is to inspire and innovate within the university communit.
              </p>
            </div>
            <Button
              className={`${inter.variable} bg-[#E91F23] hover:bg-white w-[220px] h-[50px] text-white hover:text-[#E91F23] border mt-3 rounded-[8px] text-[16px] md:text-[18px] font-medium `}
            >
              Partner with us →
            </Button>
          </div>
        </div>
      </div>

      {/* Right Mosque Image Section */}
      <div className="absolute bottom-[-10px] right-[-20px] md:bottom-[-30px] ">
        <img
          src="/Mosjid.png"
          alt="Mosque illustration"
          className="w-[300px] h-[200px] md:w-[643.40px] md:h-[457.72px] rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
