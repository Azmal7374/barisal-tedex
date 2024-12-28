/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */

import { bebasNeue, inter } from "@/app/font";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FBE9E9] py-[10px] px-[16px] sm:px-[100px] sm:[py-100px]">
      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-[32px] lg:gap-[160px] items-start">
        {/* Logo Section */}
        <div className="flex flex-col items-start gap-[16px] lg:flex-1">
          <img
            src="/Group 118.png"
            alt="TEDx University of Barishal"
            className="w-[91px] h-[86px]"
          />
          <span
            className={`${bebasNeue.className} text-[20px] text-[#111111] uppercase`}
          >
            TEDx UNIVERSITY OF BARISHAL
          </span>
        </div>

        {/* Sitemap Section */}
        <div className="flex flex-col gap-[19px]">
          <h3
            className={`${inter.className} text-[16px] text-[#111111] font-semibold`}
          >
            Sitemap
          </h3>
          <ul
            className={`${inter.className} text-[14px] text-[#11111180] space-y-2`}
          >
            {["Home", "About", "Events", "Partners", "Curators"].map(
              (link, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col gap-[19px]">
          <h3
            className={`${inter.className} text-[16px] text-[#111111] font-semibold`}
          >
            Copyright
          </h3>
          <p className={`${inter.className} text-[14px] text-[#11111180]`}>
            © 2024 TEDx University of Barishal
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-[19px] items-start">
          <h3
            className={`${inter.className} text-[16px] text-[#111111] font-semibold`}
          >
            Contact
          </h3>
          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://facebook.com" // Replace with your desired Facebook link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[40px] h-[40px] border border-gray-400 rounded-md hover:shadow-lg transition-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
              >
                <path
                  d="M25.6654 14.5314C25.6654 20.9747 20.442 26.1981 13.9987 26.1981C7.55537 26.1981 2.33203 20.9747 2.33203 14.5314C2.33203 8.08809 7.55537 2.86475 13.9987 2.86475C20.442 2.86475 25.6654 8.08809 25.6654 14.5314Z"
                  fill="#111111"
                />
                <path
                  d="M8.16406 20.3644L13.0565 15.472M13.0565 15.472L8.16406 8.69775H11.4048L14.9383 13.5902M13.0565 15.472L16.59 20.3644H19.8307L14.9383 13.5902M19.8307 8.69775L14.9383 13.5902"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://facebook.com" // Replace with your desired Facebook link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[40px] h-[40px] border border-gray-400 rounded-md hover:shadow-lg transition-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <g clipPath="url(#clip0_2352_7579)">
                  <path
                    d="M20 10.5313C20 5.00844 15.5228 0.53125 10 0.53125C4.47719 0.53125 0 5.00844 0 10.5313C0 15.5225 3.65687 19.6596 8.4375 20.4098V13.4219H5.89844V10.5313H8.4375V8.32813C8.4375 5.82188 9.93047 4.4375 12.2147 4.4375C13.3088 4.4375 14.4531 4.63281 14.4531 4.63281V7.09375H13.1922C11.9499 7.09375 11.5625 7.86461 11.5625 8.65547V10.5313H14.3359L13.8926 13.4219H11.5625V20.4098C16.3431 19.6596 20 15.5226 20 10.5313Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M13.8926 13.4219L14.3359 10.5312H11.5625V8.65547C11.5625 7.86453 11.9499 7.09375 13.1922 7.09375H14.4531V4.63281C14.4531 4.63281 13.3088 4.4375 12.2146 4.4375C9.93047 4.4375 8.4375 5.82188 8.4375 8.32813V10.5312H5.89844V13.4219H8.4375V20.4098C8.95439 20.4908 9.4768 20.5314 10 20.5312C10.5232 20.5314 11.0456 20.4908 11.5625 20.4098V13.4219H13.8926Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2352_7579">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.53125)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="https://facebook.com" // Replace with your desired Facebook link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[40px] h-[40px] border border-gray-400 rounded-md hover:shadow-lg transition-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <g clipPath="url(#clip0_2352_7583)">
                  <path
                    d="M18.125 1.00007H1.875C1.5063 0.99632 1.15117 1.13899 0.887529 1.39676C0.623892 1.65454 0.473283 2.00638 0.46875 2.37507V18.6907C0.474103 19.0588 0.625072 19.4099 0.88862 19.667C1.15217 19.9241 1.50683 20.0663 1.875 20.0626H18.125C18.4937 20.0655 18.8486 19.9223 19.1121 19.6644C19.3756 19.4065 19.5263 19.0547 19.5312 18.686V2.37038C19.5247 2.00277 19.3733 1.65261 19.1099 1.39602C18.8466 1.13942 18.4927 0.997131 18.125 1.00007Z"
                    fill="#0076B2"
                  />
                  <path
                    d="M3.29141 8.14551H6.12109V17.2502H3.29141V8.14551ZM4.70703 3.61426C5.03158 3.61426 5.34884 3.71052 5.61868 3.89086C5.88851 4.07121 6.09879 4.32753 6.22292 4.6274C6.34705 4.92728 6.37945 5.25724 6.31602 5.57553C6.25259 5.89382 6.09618 6.18615 5.86658 6.41553C5.63697 6.64492 5.3445 6.80105 5.02614 6.86417C4.70779 6.9273 4.37787 6.89459 4.07811 6.77017C3.77835 6.64576 3.52223 6.43523 3.34214 6.16523C3.16206 5.89522 3.0661 5.57787 3.06641 5.25332C3.06682 4.81847 3.23985 4.40157 3.54749 4.09423C3.85512 3.78689 4.27218 3.61426 4.70703 3.61426ZM7.89609 8.14551H10.6086V9.39551H10.6461C11.0242 8.67988 11.9461 7.9252 13.3227 7.9252C16.1883 7.91895 16.7195 9.80488 16.7195 12.2502V17.2502H13.8898V12.8205C13.8898 11.7658 13.8711 10.408 12.4195 10.408C10.968 10.408 10.7211 11.558 10.7211 12.7518V17.2502H7.89609V8.14551Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2352_7583">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.53125)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          {/* Email */}
          <div className="flex items-center text-[20px] underline">
            <FaEnvelope className="text-[#111111] w-[20px] h-[20px]" />{" "}
            {/* React Icon */}
            <a
              href="mailto:butedx@gmail.com"
              className={`${inter.className}  text-[#111111] underline`}
            >
              butedx@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Large Text Section */}
      <div className="relative mt-[30px] sm:mt-[20px] text-center">
        <h1
          className={`${bebasNeue.className} text-[62px] md:text-[120px] lg:text-[318px] text-[#111111] sm:tracking-[-4.756px]   `}
        >
          TEDxBarishal
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
