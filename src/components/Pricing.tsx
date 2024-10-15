import React from "react";

const Pricing = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-[#ede8f5] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-black sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {/* Personal Plan */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[10px] border-2 border-stroke bg-[#8394c38e] px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
              <span className="mb-3 block text-lg font-semibold text-primary">
                Personal
              </span>
              <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                $59
                <span className="text-base font-medium text-body-color dark:text-dark-6">
                  / year
                </span>
              </h2>
              <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
                Perfect for using in a personal website or a client project.
              </p>
              <ul className="mb-9 flex flex-col gap-[14px]">
                <li>1 User</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
                <li>Use on 1 project</li>
                <li>3 Months support</li>
              </ul>
              <a
                href="/#"
                className="block w-full rounded-md border border-blue-500 bg-blue-500 p-3 text-center text-base font-medium text-white hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Business Plan */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[10px] border-2 border-stroke bg-[#8697c4c0] px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
              <span className="mb-3 block text-lg font-semibold text-primary">
                Business
              </span>
              <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                $199
                <span className="text-base font-medium text-body-color dark:text-dark-6">
                  / year
                </span>
              </h2>
              <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
                Perfect for using in a personal website or a client project.
              </p>
              <ul className="mb-9 flex flex-col gap-[14px]">
                <li>5 Users</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
                <li>Use on 3 projects</li>
                <li>4 Months support</li>
              </ul>
              <a
                href="/#"
                className="block w-full rounded-md border border-blue-500 bg-blue-500 p-3 text-center text-base font-medium text-white   hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 transform transition-transform duration-300 hover:scale-105 overflow-hidden rounded-[10px] border-2 border-stroke bg-[#8697c4] px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
              <span className="mb-3 block text-lg font-semibold text-primary">
                Professional
              </span>
              <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                $256
                <span className="text-base font-medium text-body-color dark:text-dark-6">
                  / year
                </span>
              </h2>
              <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
                Perfect for using in a personal website or a client project.
              </p>
              <ul className="mb-9 flex flex-col gap-[14px]">
                <li>Unlimited Users</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
                <li>Unlimited projects</li>
                <li>12 Months support</li>
              </ul>
              <a
                href="/#"
                className="block w-full rounded-md border border-blue-500 bg-blue-500 p-3 text-center text-base font-medium text-white hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
