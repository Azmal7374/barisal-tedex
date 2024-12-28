/* eslint-disable @next/next/no-img-element */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";
import { bebasNeue, inter } from "@/app/font";

const GuestsSection = () => {
  const guests = [
    {
      id: 1,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guests.png",
    },
    {
      id: 2,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guests.png",
    },
    {
      id: 3,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guests.png",
    },
    {
      id: 4,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guests.png",
    },
    {
      id: 5,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guests.png",
    },
    {
      id: 6,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guests.png",
    },
    {
      id: 7,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guests.png",
    },
    {
      id: 8,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guests.png",
    },
    {
      id: 9,
      name: "Mohammad Yousuf",
      title: "Senior Product Designer, Meta Digital",
      image: "/guests.png",
    },
  ];
  return (
    <section className=" px-[16px] py-[60px] sm:px-[100px] sm:py-[100px] flex flex-col gap-[62px]">
      <h2
        className={`${bebasNeue.className} text-[38px] md:text-[52px] leading-[120%] text-[#FFFFFF] text-center uppercase`}
      >
        Our Guests
      </h2>

      {/* Responsive Grid */}
      <div className="flex flex-row flex-wrap md:gap-[20px] lg:gap-[20px] ">
        {guests.map((guest) => (
          <div
            className="w-[370px] lg:w-[400px] h-[480px] mx-auto relative bg-[#151515]"
            key={guest.id}
          >
            <div className="relative">
              {/* Guest Image */}
              <img
                src={guest.image}
                alt={guest.name}
                className="w-full h-full object-cover"
              />

             {/* Top-left "TEDx University of Barisal" Text */}
  <div className="absolute top-[10px] left-[10px]">
    <h3 className={`${bebasNeue.className} text-[20px] md:text-[24px] text-red-600 uppercase inline-block`}>
      TED<sup className="text-[12px] md:text-[14px]">x</sup>
      <sub className={`${inter.variable} text-white text-[12px] md:text-[24px] ml-[10px]`}>University of Barisal</sub>
    </h3>
  </div>

              {/* Bottom Red Section */}
              <div className="absolute bottom-0 w-full bg-red-600 p-4 text-white">
                <p
                  className={`${inter.variable} font-[500] text-[12px] leading-none tracking-[-0.6px]`}
                >
                  Meet Our Team
                </p>
                <div className="flex flex-col items-start mt-[8px]">
                  {guest.name.split(" ").map((part, index) => (
                    <h3
                      key={index}
                      className={`${bebasNeue.className} font-[400] text-[24px] md:text-[32px] leading-[80%] tracking-[-0.32px]`}
                    >
                      {part}
                    </h3>
                  ))}
                </div>
                <p
                  className={`${inter.variable} font-[500] text-[14px] leading-none`}
                >
                  {guest.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Join Event Button */}
      <div className="flex justify-center flex-col items-center">
        <button
          className={`${inter.variable} w-[174px] h-[50px] text-[#FFFFFF] border border-[#FFFFFF] py-[9px] px-[15px] rounded-[8px] text-[17px] font-[400] leading-[121%]`}
        >
          Join Event
        </button>
      </div>
    </section>
  );
};

export default GuestsSection;
