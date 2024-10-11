import { Link } from "react-router-dom";
import personImage from "../assets/ca.png"; // replace with correct image path

const App = () => {
  return (
    <div className="bg-[#ede8f5] min-h-screen flex flex-col justify-between">
      <header className="absolute top-4 left-4 flex items-center gap-4"></header>

      <main className="flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-20 gap-10 px-6 lg:px-24 py-10 flex-grow">
        {/* Left section */}
        <div className="flex flex-col gap-6 text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
            T4Tax - Tax Made Easy
            <br /> Indian GST made easy.
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            possimus et beatae labore repellendus eum in facilis debitis aliquid
            fugit, perferendis ipsum accusantium fugiat corrupti quam!
            Necessitatibus asperiores labore quidem?
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <Link
              to="/book-call"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              BOOK A CALL
            </Link>
            <Link
              to="/contact-sales"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-100 transition"
            >
              OUR PRICING
            </Link>
          </div>
        </div>

        {/* Right section (Image) */}
        <div className="lg:w-1/2">
          <img
            src={personImage}
            alt="Person with phone"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </main>

      {/* Partial underline effect at the bottom of the hero section */}
      <div className="text-center pb-4">
        <div className=" border-t border-gray-300 w-1/4 mx-auto mt-2 py-1">
          <span className="text-sm text-gray-500 mt-1">
            T4Tax-Tax Made Easy
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
