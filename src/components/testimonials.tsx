import React, { useState } from "react";

const testimonials = [
  {
    name: "Ronne Galle",
    title: "Project Manager",
    img: "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  },
  {
    name: "Missy Limana",
    title: "Engineer",
    img: "https://images.unsplash.com/photo-1588361035994-295e21daa761",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  },
  {
    name: "Martha Brown",
    title: "Project Manager",
    img: "https://images.unsplash.com/photo-1575377222312-dd1a63a51638",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  },
  {
    name: "Hanna Lisem",
    title: "Project Manager",
    img: "https://images.unsplash.com/photo-1549836938-d278c5d46d20",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="bg-aliceblue py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Testimonials
      </h2>
      <div className="relative flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="absolute text-xl bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition-all duration-300
          left-4 md:left-16 lg:left-24"
        >
          {"<"}
        </button>

        <div className="w-full md:w-2/3 lg:w-1/2 px-4">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h5 className="text-xl font-semibold text-blue-500">
              {testimonials[current].name}
              <br />
              <span className="text-gray-600 text-lg">
                {testimonials[current].title}
              </span>
            </h5>
            <p className="text-gray-700 mt-4">{testimonials[current].text}</p>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute text-xl bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition-all duration-300
          right-4 md:right-16 lg:right-24"
        >
          {">"}
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
