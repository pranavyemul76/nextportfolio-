import React from "react";
import Link from "next/link";
import Graphics from "./Graphics";
const Herosection = () => {
  const onButtonClick = () => {
    const pdfUrl = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="Home">
      <div className="justify-left relative flex w-full break-after-column gap-2 bg-[#f9fcfb] sm:flex">
        <div className="spt-16 relative isolate w-full px-5  sm:w-1/2 sm:px-12  lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-left">
              <p className="mt-6 text-lg leading-8 text-gray-600">Hello!</p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                I'm Pranav Yemul
              </h1>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Fullstack Web Developer
              </h3>
              <p className="mb-4 mt-4 text-lg leading-8 text-gray-600">
                I have 2 year of experience in Full stack web development,
                specializing in developing dynamic web applications. expertise
                lies in optimizing performance and efficiency across the stack.
                I focus on enhancing user experience and reducing load times.
                This includes implementing best practices in React, Node.js,
                Express, and MongoDB.
              </p>

              <div className="justify-left mb-4 flex items-center gap-x-6 pb-10 sm:pb-1">
                <button
                  onClick={onButtonClick}
                  class="group/download relative flex cursor-pointer gap-1 rounded-3xl bg-[#5c5fe9] px-8 py-4 font-semibold text-[#f1f1f1] shadow-xl transition-all duration-300 hover:bg-opacity-70 active:shadow-inner"
                >
                  Download Resume
                  <div class="absolute bottom-full left-2/4 mb-3 origin-bottom scale-0 rounded-md bg-[#5c5fe9] px-2 py-2 text-xs uppercase shadow-lg transition-all duration-300 before:absolute before:left-2/4 before:top-full before:h-3 before:w-3 before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:border-solid before:bg-[#5c5fe9] before:content-[''] group-hover/download:scale-100">
                    84kb
                  </div>
                </button>

                <div className="flex justify-start gap-1">
                  <Link href="https://github.com/pranavyemul76" target="_blank">
                    <img
                      src="githubicon.png"
                      className="mx-3 w-12 hover:scale-75"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/pranav-yemul-023bb6178/"
                    target="_blank"
                  >
                    <img
                      src="linkedin.svg"
                      className="mx-3 w-12 hover:scale-75"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/journeyjoystories/"
                    target="_blank"
                  >
                    <img
                      src="instagram.svg"
                      className="mx-3 w-12 hover:scale-75"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 object-contain sm:block">
          <Graphics></Graphics>
          <img src="/cartoonpic.png" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
