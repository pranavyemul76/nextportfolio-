import React from "react";

const EducationAndExperience = () => {
  return (
    <section id="Experience">
      <h2 className="mb-6  ml-1 mt-10 text-4xl font-extrabold dark:text-white sm:ml-8">
        Education & Experience
      </h2>
      <hr></hr>
      <div class="  mt-6 h-full w-full border border-violet-500 ">
        <div class="wrap relative h-full overflow-hidden p-10">
          <div class="border-2-2  absolute  left-0 h-full border border-gray-700 border-opacity-20 sm:left-1/2"></div>
          <div class="left-timeline mb-8 w-full flex-row-reverse items-center justify-between sm:flex">
            <div class="order-1 sm:w-5/12"></div>
            <div class="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
              <h1 class="mx-auto text-lg font-semibold text-white">4</h1>
            </div>
            <div class="order-1 rounded-lg bg-indigo-700 px-6 py-4 shadow-xl sm:w-5/12">
              <h3 class="mb-3 text-xl font-bold text-white">
                PowerSchool | Bangalore
              </h3>
              <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Associate software engineer
              </p>
              <p class="mt-3 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Nov 2024 - Feb 2025
              </p>
            </div>
          </div>
          <div class="right-timeline mb-8 w-full items-center justify-between sm:flex">
            <div class="order-1 sm:w-5/12"></div>
            <div class="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-indigo-950 shadow-xl">
              <h1 class="mx-auto text-lg font-semibold text-white">3</h1>
            </div>
            <div class="order-1 rounded-lg bg-indigo-950 px-6 py-4 shadow-xl sm:w-5/12">
              <h3 class="mb-3 text-xl font-bold text-white">
                LegitBytes | Remote
              </h3>
              <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Full stack Developer
              </p>
              <p class="mt-3 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Jan 2023 - Jun 2024
              </p>
            </div>
          </div>
          <div class="left-timeline mb-8 w-full flex-row-reverse items-center justify-between sm:flex">
            <div class="order-1 sm:w-5/12"></div>
            <div class="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
              <h1 class="mx-auto text-lg font-semibold text-white">2</h1>
            </div>
            <div class="order-1 rounded-lg bg-indigo-700 px-6 py-4 shadow-xl sm:w-5/12">
              <h3 class="mb-3 text-xl font-bold text-white">
                Data Stack Technologies | Remote
              </h3>
              <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Web Developer
              </p>
              <p class="mt-3 text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Aug 2022 - Dec 2022
              </p>
            </div>
          </div>
          <div class="right-timeline mb-8 w-full items-center justify-between sm:flex">
            <div class="order-1 sm:w-5/12"></div>
            <div class="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
              <h1 class="mx-auto text-lg font-semibold text-white">1</h1>
            </div>
            <div class="order-1 rounded-lg bg-gray-800 px-6 py-4 shadow-xl sm:w-5/12">
              <h3 class="mb-3 text-xl font-bold text-white">
                Bachelor of Computer Application
              </h3>
              <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
                Bharati Vidyapeeth University
              </p>
              <p class="mt-4 text-sm leading-snug tracking-wide text-white text-opacity-100">
                2019-2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;
