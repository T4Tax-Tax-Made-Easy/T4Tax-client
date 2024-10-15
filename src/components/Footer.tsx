import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom"; // Use Link from React Router

interface NavigationItem {
  id: string;
  url: string | { urls: { id: string; url: string }[] };
}

// Mock translation function
const t = (key: string) => key;

// Mock navigation data
const navigation: NavigationItem[] = [
  { id: "Home", url: "/about-us" },
  { id: "Blog", url: "/services" },
];

const Footer = () => {
  return (
    <footer className="text-white mt-10">
      {/* Use a deep dark purple or charcoal */}
      <div className="bg-[#1b1231c4] h-1/2 w-full ">
        <div className="content-container flex md:flex-row flex-col justify-around items-start">
          <div className="p-5 ">
            <ul className="flex flex-col justify-center items-center gap-4">
              <Link
                to="/#"
                className="flex gap-2 bg-primary-100 rounded-full justify-between items-center px-4 py-2"
              >
                <img
                  src="src/assets/T4Tax.png"
                  height={100}
                  width={100}
                  alt="Logo"
                  className="object-center object-contain"
                />
              </Link>

              <div className="flex gap-6 pb-5">
                <Instagram className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Twitter className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Linkedin className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Youtube className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
              </div>
            </ul>
          </div>

          <div className="flex flex-col p-5 gap-4 ">
            <p className="heading !text-gray-300">Address</p>
            <p>
              T4Tax,
              <br /> Banglore,
              <br /> Pune . - 574115.
              <br />
              <br />
              Ph No: 7892859097
            </p>
          </div>

          <div className="p-5 flex flex-col gap-1">
            <p className="heading mb-4 !text-gray-300">{t("Content")}</p>
            {navigation.map((item) => {
              if (typeof item.url === "string") {
                return (
                  <Link
                    key={item.id}
                    to={item.url}
                    style={{ textTransform: "capitalize" }}
                    className="text-gray-400 body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer"
                  >
                    {t(item.id)}
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <h1 className="flex flex-col justify-center items-center text-center p-5">
          &copy; 2023-2024 All rights reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
