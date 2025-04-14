import React from "react";

const WhatIDo = () => {
  return (
    <section>
      <h2 className="mb-6  ml-1 mt-6 text-4xl font-extrabold dark:text-white sm:ml-8">
        What I Do!
      </h2>
      <hr></hr>
      <div className="m-auto mt-6 grid grid-cols-1 gap-8 sm:grid-cols-4 sm:px-7">
        <div className="flex">
          <div className="flex w-full flex-col justify-between rounded-lg border border-gray-200 bg-indigo-500 p-6 text-white shadow dark:border-gray-700 dark:bg-gray-800">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight  dark:text-white">
              Front-End Development
            </h5>
            <p className="font-normal  dark:text-gray-300">
              Creating the visual and interactive elements of a website using
              HTML, CSS, and JavaScript to ensure a user-friendly experience.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex w-full flex-col justify-between rounded-lg border border-gray-200 bg-orange-300 p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Optimization
            </h5>
            <p className="font-normal  dark:text-gray-300">
              Code Executing efficiency, thereby speeding up response times and
              improving the overall performance of the web application.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex w-full flex-col  rounded-lg border border-gray-200 bg-indigo-500 p-6 text-white shadow dark:border-gray-700 dark:bg-gray-800">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight  dark:text-white">
              Back-End Development
            </h5>
            <p className="font-normal  dark:text-gray-300">
              Building and maintaining the server-side logic, databases, and
              APIs functionality and data processing of a web application.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex w-full flex-col  rounded-lg border border-gray-200 bg-orange-300 p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Translate Designs
            </h5>
            <p className="font-normal  dark:text-gray-300">
              Convert design concepts into code using CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
