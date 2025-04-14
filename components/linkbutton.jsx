import React from "react";
const LinkButton = () => {
  return (
    <div class="group relative flex items-center justify-center text-sm font-bold text-zinc-600">
      <div class="absolute -translate-y-[300%] skew-y-[20deg] opacity-0 shadow-md duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-0 group-hover:opacity-100 group-hover:delay-500">
        <div class="flex items-center gap-1 rounded-md bg-indigo-700 p-2 text-white">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-zinc-600"
          >
            <circle stroke-linejoin="round" r="9" cy="12" cx="12"></circle>
            <path
              stroke-linejoin="round"
              d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"
            ></path>
            <path
              stroke-linejoin="round"
              d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"
            ></path>
            <path stroke-linejoin="round" d="M3 12H21"></path>
            <path stroke-linejoin="round" d="M19.5 7.5H4.5"></path>
            <g filter="url(#filter0_d_15_556)">
              <path stroke-linejoin="round" d="M19.5 16.5H4.5"></path>
            </g>
            <defs>
              <filter
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
                height="3"
                width="17"
                y="16"
                x="3.5"
                id="filter0_d_15_556"
              >
                <feFlood
                  result="BackgroundImageFix"
                  flood-opacity="0"
                ></feFlood>
                <feColorMatrix
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  type="matrix"
                  in="SourceAlpha"
                ></feColorMatrix>
                <feOffset dy="1"></feOffset>
                <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  type="matrix"
                ></feColorMatrix>
                <feBlend
                  result="effect1_dropShadow_15_556"
                  in2="BackgroundImageFix"
                  mode="normal"
                ></feBlend>
                <feBlend
                  result="shape"
                  in2="effect1_dropShadow_15_556"
                  in="SourceGraphic"
                  mode="normal"
                ></feBlend>
              </filter>
            </defs>
          </svg>
          <span> Developed by Pranav</span>
        </div>
        <div class="absolute bottom-0 left-1/2 translate-x-full translate-y-1/2 rotate-45 bg-indigo-700 p-1 shadow-md"></div>
        <div class="absolute left-0 top-0 h-full w-full rounded-md bg-white duration-500 group-hover:scale-[115%] group-hover:opacity-0 group-hover:delay-700">
          <div class="absolute bottom-0 left-1/2 translate-x-full translate-y-1/2 rotate-45 border-b border-r border-white bg-white p-1"></div>
        </div>
      </div>

      <div class="flex cursor-pointer items-center rounded-full bg-gradient-to-br from-indigo-700 to-indigo-700 p-3 text-white shadow-md duration-300 group-hover:gap-2">
        Live Demo
      </div>
    </div>
  );
};
export default LinkButton;
