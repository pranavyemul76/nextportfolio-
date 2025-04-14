import React from "react";

const ThankYou = () => {
  return (
    <div>
      <div class="card flex justify-center">
        <div class="group relative flex aspect-video w-[300px] items-center justify-center bg-indigo-700 transition-all duration-700 sm:w-[350px]">
          <div class="absolute flex h-full w-full flex-col items-center justify-start bg-white py-5 transition-all duration-300 group-hover:-translate-y-16 group-hover:duration-1000">
            <p class="font-serif text-xl font-semibold text-gray-500 sm:text-2xl">
              Thank You
            </p>
            <p class="px-10 text-center text-[10px] text-gray-700 sm:text-[12px]">
              Looking forward to connecting and building something amazing
              together!
            </p>

            <p class="pt-5 font-sans text-[10px] text-gray-700">Pranav </p>
          </div>
          <button class="seal z-40 flex aspect-square w-10 items-center justify-center rounded-full border-4 border-rose-900 bg-white text-[10px] font-semibold text-red-800 transition-all duration-1000 [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:rotate-180 group-hover:scale-0 group-hover:opacity-0">
            Open
          </button>
          <div class="tp absolute h-full w-full bg-indigo-800 transition-all duration-1000 [clip-path:polygon(50%_50%,_100%_0,_0_0)] group-hover:duration-100 group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)]"></div>
          <div class="lft absolute h-full w-full bg-indigo-800 transition-all duration-700 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
          <div class="rgt absolute h-full w-full bg-indigo-800 transition-all duration-700 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
          <div class="btm absolute h-full w-full bg-indigo-800 transition-all duration-700 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
