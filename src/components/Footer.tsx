import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

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
    <footer className="bg-[#1b1231] text-white mt-0 pt-11">
      <div className="content-container flex flex-col md:flex-row justify-between items-start px-5 py-8 md:py-12 space-y-8 md:space-y-0">
        {/* Logo and Social Media Links */}
        <div className="flex flex-col items-center space-y-5">
  <Link to="/" className="flex gap-2 items-center">
    <img
      src="src/assets/T4Tax.png"
      height={100}
      width={100}
      alt="Logo"
      className="object-center object-contain filter brightness-0 invert"
    />
  </Link>

          <div className="flex gap-6">
            <a href="#" aria-label="Instagram">
              <Instagram className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-lg font-semibold text-gray-300">Address</p>
          <p className="text-gray-400">
            T4Tax,
            <br /> Banglore,
            <br /> Pune - 574115.
            <br />
            <br />
            Ph No: 7892859097
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <p className="text-lg font-semibold text-gray-300">{t("Content")}</p>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  to={typeof item.url === "string" ? item.url : "#"}
                  className="text-gray-400 hover:text-secondary-300 transition-colors duration-150 font-semibold"
                  style={{ textTransform: "capitalize" }}
                >
                  {t(item.id)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center">
        <p className="text-gray-400">&copy; 2023-2024 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
