
import CardWhatsInForYou from './CardWhatsInForYou';

const WhatsInForYou = () => {
  return (
    <div className="container mx-auto py-8 mt-16">
      {/* Heading centered */}
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-10">What's in for you?</h1>

      {/* Cards container */}
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <CardWhatsInForYou 
          title="Card 1" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <CardWhatsInForYou 
          title="Card 2" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <CardWhatsInForYou 
          title="Card 3" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
};

export default WhatsInForYou;
