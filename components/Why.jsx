import React from "react";

const Why = () => {
  return (
    <section class="container mx-auto border border-indigo-700 bg-white dark:bg-gray-900">
      <div class="mx-auto flex  max-w-screen-xl lg:gap-4">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-indigo-600 md:text-5xl xl:text-6xl">
            My Unique Value
          </h1>
        </div>
        <div class="hidden rounded-lg lg:col-span-5 lg:mt-0 lg:flex">
          <div class="flex flex-wrap">
            <div class="w-full px-4 md:w-6/12">
              <div class="relative mt-4 flex flex-col">
                <div class="flex-auto px-4 py-5">
                  <div class="text-blueGray-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 p-3 text-center shadow-lg">
                    <i class="fas fa-sitemap"></i>
                  </div>
                  <h6 class="mb-1 text-xl font-semibold">
                    Performance-First Mindset
                  </h6>
                  <p class="text-blueGray-500 mb-4">
                    I don’t just build features — I optimize them. Every line of
                    code I write is designed to scale and perform under
                    real-world conditions.
                  </p>
                </div>
              </div>
              <div class="relative flex min-w-0 flex-col">
                <div class="flex-auto px-4 py-5">
                  <div class="text-blueGray-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 p-3 text-center shadow-lg">
                    <i class="fas fa-drafting-compass"></i>
                  </div>
                  <h6 class="mb-1 text-xl font-semibold">
                    Curious and Constant Learner
                  </h6>
                  <p class="text-blueGray-500 mb-4">
                    Whether it's Micro Frontends, browser extensions, or working
                    without third-party APIs — I actively explore new tech and
                    solve problems creatively.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-6/12">
              <div class="relative mt-4 flex min-w-0 flex-col">
                <div class="flex-auto px-4 py-5">
                  <div class="text-blueGray-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 p-3 text-center shadow-lg">
                    <i class="fas fa-newspaper"></i>
                  </div>
                  <h6 class="mb-1 text-xl font-semibold">
                    User-Centric Engineering
                  </h6>
                  <p class="text-blueGray-500 mb-4">
                    I build with the end user in mind — easy, clean, and
                    friendly interfaces.
                  </p>
                </div>
              </div>
              <div class="relative flex min-w-0 flex-col">
                <div class="flex-auto px-4 py-5">
                  <div class="text-blueGray-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-700 p-3 text-center shadow-lg">
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <h6 class="mb-1 text-xl font-semibold">
                    I love practicing yoga
                  </h6>
                  <p class="text-blueGray-500 mb-4">
                    Yoga is my way of finding peace and clarity. It helps me
                    stay balanced, both mentally and emotionally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
