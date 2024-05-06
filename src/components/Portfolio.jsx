import React from "react";
import gamehub from "../assets/portfolio/react-ts.jpg";
import Blogapp from "../assets/portfolio/Blog Web App.jpg";
import portfolio from "../assets/portfolio/Portfolio1.jpg";
import Amazon from "../assets/portfolio/Amazon.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Blogapp,
      demoLink:
        "https://663786a7e4a642d374d2a7e8--starlit-bunny-b1a3a4.netlify.app/",
      codeLink: "https://github.com/Nithinvooradi/blog-reactjs",
    },
    {
      id: 2,
      src: portfolio,
      demoLink: "https://prismatic-mooncake-0a73fd.netlify.app/",
      codeLink: "https://github.com/Nithinvooradi/react-portfolio",
    },
    {
      id: 3,
      src: gamehub,
      demoLink: "https://game-hub-eight-brown.vercel.app/",
      codeLink: "https://github.com/Nithinvooradi/Game-hub",
    },

    {
      id: 4,
      src: Amazon,
      demoLink: "https://tubular-syrniki-cd720e.netlify.app/",
      codeLink: "https://github.com/Nithinvooradi/Amazon-home-page",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto pt-40 pr-25 flex flex-col justify-center w-full h-full sm:p-4">
        <div className="pb-8 pt-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-28 sm:px-4">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-t-md rounded-b-sm duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeLink} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
