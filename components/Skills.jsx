import React from "react";

const Skills = () => {
  const SkillData = [
    { name: "Javascript", experience: "2+ years", image: "js.png" },
    { name: "NodeJs", experience: "2+ years", image: "nodejs.png" },
    { name: "React", experience: "2+ years", image: "images.png" },
    { name: "Html5", experience: "2+ years", image: "html.png" },
    { name: "css", experience: "2+ years", image: "css.png" },
    { name: "AWS", experience: "1+ years", image: "web.png" },
    { name: "GitHub", experience: "2+ years", image: "GitHub.png" },
    { name: "MongoDB", experience: "2+ years", image: "mongodb.png" },
    { name: "Postgre", experience: "1+ years", image: "postgre.png" },
    { name: "Tailwind", experience: "1.5+ years", image: "tailwind.png" },
    { name: "Redux", experience: "2+ years", image: "Redux.png" },
    { name: "TypeScript", experience: "2+ years", image: "Typescript.svg.png" },
  ];
  return (
    <>
      <section id="Skills">
        <h2 className="mb-1 ml-3 mt-12 text-4xl font-extrabold dark:text-white sm:mb-7 sm:ml-8">
          Skills
        </h2>
        <hr></hr>
        <div className="my-7 grid grid-cols-2 grid-rows-3 gap-8 rounded-2xl   sm:grid-cols-6  sm:grid-rows-1">
          {SkillData.map((skill) => {
            return (
              <div className="group relative flex flex-col items-center justify-center border border-violet-500  p-4 shadow-md">
                <img src={skill.image} className="aspect-square w-3/4 " />
                <p className="mt-3 font-bold  text-indigo-700">{skill.name}</p>
                <div class="hidden group-hover:block">
                  <div class="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
                    <div class="rounded-sm bg-indigo-800 px-2 py-1 text-white">
                      <p class="whitespace-nowrap">
                        {skill.experience + " of experience"}
                      </p>
                    </div>
                    <div class="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-indigo-800"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
