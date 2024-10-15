import CenterText from "../components/centerText";
import Faq from "../components/faqs";
import Herosection from "../components/Herosection";
import WhatsForYou from "../components/WhatsInForYou";
import WhatWeDo from "../components/WhatWeDo";
import "../index.css";

const Home = () => {
  return (
    <div>
      <Herosection />
      <CenterText />
      <WhatWeDo />
      <WhatsForYou />
      <Faq />
    </div>
  );
};

export default Home;
