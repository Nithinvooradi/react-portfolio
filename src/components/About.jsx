import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pd-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia illo
          eligendi, iure vel, nostrum impedit sint earum repellat totam esse quo
          eos ut officiis animi inventore dolor consequuntur veniam doloribus
          voluptas aliquam autem porro enim debitis laboriosam! Sunt officiis,
          placeat ut totam illo quibusdam commodi at exercitationem reiciendis
          quae cum?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          nemo nesciunt pariatur veritatis rem provident quibusdam a sed culpa
          officiis perferendis delectus quasi facere minus maxime necessitatibus
          qui, totam molestiae voluptatem recusandae nam quam accusantium.
          Itaque sequi corrupti cumque soluta error expedita dicta
          exercitationem cum. Assumenda, inventore? Laboriosam, porro modi!
        </p>
      </div>
    </div>
  );
};

export default About;
