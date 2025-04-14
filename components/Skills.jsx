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
    { name: "Redux", experience: "1.5+ years", image: "Redux.png" },
    { name: "Material", experience: "1+ years", image: "material.jpg" },
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
              <div className="flex flex-col items-center justify-center border border-violet-500  p-4 shadow-md">
                <img src={skill.image} className="aspect-square w-3/4 " />
                <p className="mt-3 font-bold  text-indigo-700">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
