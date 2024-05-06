import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg pt-40 px-3 mx-auto flex flex-col justify-center w-full h-full  sm:p-5">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a committed newcomer with a broad skill set that includes
          front-end development using TailwindCSS and ReactJS, supported by a
          solid TypeScript and JavaScript base. I'm passionate about writing
          effective, clean code, and my goal is to produce responsive web apps
          and seamless user experiences that stick out in the current digital
          environment.
        </p>
        <br />
        <p className="text-xl">
          My expertise is not limited to front-end technology; I also possess a
          strong grasp of the fundamentals of back-end development. With my
          extensive knowledge of data structures, algorithms, and SQL along with
          my proficiency with C++ coding, I am able to design complete solutions
          that put security, scalability, and performance first.
        </p>
        <br />
        <p className="text-xl">
          I have an insatiable need for perfection, and I'm excited to work with
          creative teams on cutting-edge projects that test the limits of
          technology. I am ready to contribute significantly to any company
          looking for a driven and flexible developer because of my dedication
          to lifelong learning and proactive approach to problem-solving.
        </p>
      </div>
    </div>
  );
};

export default About;
