import React from "react";

const Contact = () => {
  return (
    
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to bg-gray-800 text-white p-0  sm:p-4"
    >
      <div className="flex flex-col justify-center pt-80 px-4  max-w-screen-lg mx-auto h-full sm:p-4">
        <div className="pb-8 pt-20">
        
          <p className="text-3xl font-bold inline border-b-4 border-gray-500 sm:text-4xl">
            Contact
          </p>
          <p className="mt-4">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center ">
          <form
            action="https://getform.io/f/jbwxrdna"
            method="POST"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500  to-blue-500 px-4 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
