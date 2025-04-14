import React from "react";
import Link from "next/link";
import LinkButton from "./linkbutton";
import ThankYou from "./ThankYou";

const Projects = () => {
  return (
    <>
      <section id="Project" class="pt-7 sm:px-8 sm:py-7">
        <div class="container mx-auto text-center">
          <h2 class="text-blue-gray-900 mb-4 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal antialiased">
            Projects
          </h2>
          <p class="mb-8 block font-sans text-base font-normal leading-relaxed !text-gray-500 text-inherit antialiased">
            "he power of the Web is in its universality. Access by everyone
            regardless of disability is an essential aspect"
          </p>
        </div>
        <h4 class="text-blue-gray-900 mb-3 block text-center font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
          E-commerce Application
        </h4>
        <div class="flex items-center justify-center">
          <div class="relative flex w-full  flex-col rounded-xl border border-violet-500  bg-white bg-clip-border text-gray-700 shadow-md sm:w-3/4 sm:flex-row">
            <div class="relative m-0  w-full shrink-0  overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 sm:w-1/2">
              <img
                src="project.png"
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                Cilory
              </h6>

              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                Our goal is to create an intuitive, user-friendly, and secure
                platform that simplifies the shopping process, Responsive design
                for optimal viewing on desktops, tablets, and mobile devices.
                Personalized user accounts with order history, wish lists, and
                recommendations. ensuring customer satisfaction and loyalty.
              </p>
              <Link
                class="inline-block"
                href="https://deployments-eta.vercel.app/"
                target="_blank"
              >
                <LinkButton></LinkButton>
              </Link>
            </div>
          </div>
        </div>
        <h4 class="text-blue-gray-900 mb-2 mt-7 block text-center font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
          Secure Document Sharing and Upload with User Email OTP Verification
        </h4>
        <div class="mt-7 flex items-center justify-center">
          <div class="relative flex w-full  flex-col rounded-xl border border-violet-500  bg-white bg-clip-border text-gray-700 shadow-md sm:w-3/4 sm:flex-row">
            <div class="relative m-0  w-full shrink-0  overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 sm:w-1/2">
              <img
                src="projectsecond.png"
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                Document sharing
              </h6>

              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                This feature ensures that only verified users can upload
                documents by implementing an email-based OTP (One-Time Password)
                verification system. Before uploading, users must enter a valid
                OTP sent to their registered email, enhancing security and
                preventing unauthorized access.
              </p>
              <Link
                class="inline-block"
                href="https://documentupload.vercel.app/"
                target="_blank"
              >
                <LinkButton></LinkButton>
              </Link>
            </div>
          </div>
        </div>
        <h4 class="text-blue-gray-900 mb-2 mt-7 block text-center font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
          Smart Event Management System
        </h4>
        <div class="mt-7 flex items-center justify-center">
          <div class="relative flex w-full  flex-col rounded-xl border border-violet-500  bg-white bg-clip-border text-gray-700 shadow-md sm:w-3/4 sm:flex-row">
            <div class="relative m-0  w-full shrink-0  overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 sm:w-1/2">
              <img
                src="projectthird.png"
                alt="image"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                Smart Events
              </h6>

              <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                A centralized platform to create, manage, and track events
                efficiently. It allows organizers to add event details, manage
                attendees, and share updates, while users can browse, register,
                and receive notifications — all in one place.
              </p>
              <Link
                class="inline-block"
                href="https://events-eight-smoky.vercel.app/"
                target="_blank"
              >
                <LinkButton></LinkButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="my-6">
        <div class="container mx-auto rounded-xl border  border-indigo-700 p-1">
          <h1 class="mb-7 from-current text-center text-4xl font-bold uppercase">
            Ideal person in my life
          </h1>
          <Link href="/"></Link>
          <div class="gap-4 space-y-4 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            <div class="flex bg-indigo-700">
              <div className="flex">
                <div class="transform shadow-lg transition duration-500  hover:shadow-xl">
                  <div>
                    <img
                      class="aspect-square w-full"
                      src="https://imagesvs.oneindia.com/img/2016/11/ratantata-01-1478010504.jpg"
                    />
                    <div className=" p-8 text-center text-white ">
                      {/* Top quote icon */}
                      <div className="mb-4 text-4xl text-orange-400">“</div>

                      {/* Quote text */}
                      <p className="text-2xl font-medium">
                        “ Ups and downs in life are very important to keep us
                        going because a straight line even in an ECG means we
                        are not alive ”
                      </p>

                      {/* Author name */}
                      <div className="absolute bottom-7 mt-6 text-lg font-bold tracking-wider text-white">
                        <span className="text-orange-400"> ------------ </span>{" "}
                        Sir Ratan Naval Tata{" "}
                        <span className="text-orange-400"> ------------ </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex  bg-indigo-700">
              <div className="flex">
                <div class="transform shadow-lg transition duration-500  hover:shadow-xl">
                  <div>
                    <img
                      class="aspect-square w-full"
                      src="https://rmaward.asia/wp-content/uploads/2024/08/2008-Amte-2.png"
                    />
                    <div className="  bg-indigo-700 p-8 text-center text-white shadow-lg">
                      {/* Top quote icon */}
                      <div className="mb-4 text-4xl text-orange-400">“</div>

                      {/* Quote text */}
                      <p className="text-2xl font-medium">
                        “ I sought my soul, but my soul I could not see, I
                        sought my god, but my god eluded me; And then I sought
                        my sisters and my brothers, and in them I found all
                        three ”
                      </p>

                      {/* Author name */}
                      <div className="mt-6  text-lg font-bold tracking-wider text-white">
                        <span className="text-orange-400"> ------------ </span>{" "}
                        Sir Prakash Amte
                        <span className="text-orange-400"> ------------ </span>
                      </div>

                      {/* Horizontal lines */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex  bg-indigo-700">
              <div className="flex">
                <div class="transform shadow-lg transition duration-500  hover:shadow-xl">
                  <div>
                    <img
                      class="aspect-square w-full"
                      src="https://static.toiimg.com/thumb/imgsize-23456,msid-98926372,width-600,resizemode-4/98926372.jpg"
                    />
                    <div className="  bg-indigo-700 p-8 text-center text-white ">
                      {/* Top quote icon */}
                      <div className="mb-4 text-4xl text-orange-400">“</div>

                      {/* Quote text */}
                      <p className="text-2xl font-medium">
                        “ Perfection is a journey, not a destination. Keep
                        improving every day ”
                      </p>

                      {/* Author name */}
                      <div className="absolute bottom-7 mt-6 text-lg font-bold tracking-wider text-white">
                        <span className="text-orange-400"> ------------ </span>{" "}
                        Lata Mangeshkar Ji
                        <span className="text-orange-400"> ------------ </span>
                      </div>

                      {/* Horizontal lines */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
