import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg  pt-20 px-4 mx-auto flex flex-col justify-center items-center h-full  md:flex-row sm:px-4">
        <div className="flex flex-col justify-center  h-full">
          <h2 className="text-5xl sm:text-5xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Passionate fresher with expertise in ReactJS, TailwindCSS,
            JavaScript, TypeScript, and proficient in C++, Data Structures,
            Algorithms, SQL, Node.js, and Spring Boot. Dedicated to delivering
            high-quality code and solving complex problems with a keen eye for
            detail and a drive for continuous learning. Skilled in both
            front-end and back-end development, striving to build robust and
            scalable full-stack applications.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:h-80 w-2/3 md:w-full px-4 mb-6 sm:mb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
