import React from "react";

import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import Ccp from "../assets/C++.png";

import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Java from "../assets/Java.png";
import Python from "../assets/Python.png";
import MySQL from "../assets/MySQL.png";
import VsCode from "../assets/vsCode.png";
import redux from "../assets/Reduxtoolkit.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: Ccp,
      title: "C++",
      style: "shadow-blue-800",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: react,
      title: "React",
      style: "shadow-cyan-700",
    },
    {
      id: 4,
      src: redux,
      title: "Redux Toolkit",
      style: "shadow-purple-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: Java,
      title: "Java",
      style: "shadow-orange-500",
    },

    {
      id: 7,
      src: Python,
      title: "Python",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: MySQL,
      title: "MySQL",
      style: "shadow-orange-300",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    }
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg pt-80 px-4 mx-auto flex flex-col justify-center w-full h-full text-white sm:p-4">
        <div className="py-2 mt-20">
          <p className="text-4xl font-bold  border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 mt-10 sm:grid-cols-3 md:grid-cols-4  gap-8 text-center py-4 px-10 sm:px-0">
          {experiences.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-12 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
