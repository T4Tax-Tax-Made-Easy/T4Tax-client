import CenterText from "../components/centerText";
import Faq from "../components/faqs";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import Pricing from "../components/Pricing";
import TestimonialsCarousel from "../components/testimonials";
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
      <Pricing />
      <Faq />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
};

export default Home;
