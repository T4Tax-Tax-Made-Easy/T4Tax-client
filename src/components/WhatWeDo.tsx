import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

export default function WhatWeDo() {
  return (
    <>
      <div className="lg:grid grid-cols-10 lg:px-24 px-6 items-center justify-center lg:space-x-5 py-10">
        <div className="col-span-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-5 max-lg:text-center">
            What we are and what we do?
          </h1>
          <p className="text-gray-600">
            We are a team of semi-qualified CA professionals, committed to
            keeping you updated on all the latest tax changes and making complex
            tax concepts easier to understand. Our goal is to provide
            comprehensive tax consultancy services, ensuring you receive
            top-notch support i in areas such as tax planning, compliance, and
            filing of GSTR-1 and GSTR-3B returns. In addition to GST services,
            we offer expert income tax advice, planning, and IT return filing.
            With five years of collective experience in a leading taxation firm
            , we are dedicated to resolving your tax issues with personalized
            care. Connect with us through our Fiverr Gig for samples of our
            work, and let’s grow together!
          </p>
        </div>
        <div className="col-span-4 max-lg:px-20 max-sm:px-0 pt-10">
          <div className="grid grid-cols-2">
            <div className=" col-span-1 m-2">
              <img src={img1} alt="" className="mb-5 rounded-3xl" />
              <img src={img2} alt="" className="mb-5 rounded-3xl" />
            </div>

            <div className=" col-span-1 m-2">
              <img src={img3} alt="" className="mt-5 rounded-3xl" />
              <img src={img4} alt="" className="mt-5 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
