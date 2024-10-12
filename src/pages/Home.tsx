import Herosection from "../components/Herosection";
import WhatWeDo from "../components/WhatWeDo";
import "../index.css";
import CenterText from "../components/centerText";
import Faq from "../components/faqs";

const Home = () => {
  return (
    <div>
      <Herosection />
      <CenterText />
      <WhatWeDo />
      <Faq />
    </div>
  );
};

export default Home;
