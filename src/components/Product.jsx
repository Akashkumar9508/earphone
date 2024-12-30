import HeadPhone from "../assets/headphone.png";
import SmartWatch from "../assets/smartwatch.png";
import WairedEarphone from "../assets/wairedEarphone.png";

const Product = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="absolute -bottom-10  left-0 right-0 z-10 text-black"
      >
        <div className="h-auto flex flex-wrap justify-evenly gap-4">
          {/* Product Card */}
          <div className="flex w-full sm:w-[48%] lg:w-[19%] rounded-md flex-col items-center bg-white relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer p-4">
            <img
              data-aos="fade-right"
              src={HeadPhone}
              alt="Bluetooth Smartwatch"
              className="h-36 md:h-[80%] object-contain"
            />
            <h3 className="text-sm font-semibold">Bluetooth Smartwatch</h3>
            <p className="text-xs">starts at ₹1,999</p>
          </div>
          {/* Product Card */}
          <div className="flex w-full sm:w-[48%] lg:w-[19%] rounded-md flex-col items-center bg-white relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer p-4">
            <img
              src={SmartWatch}
              data-aos="fade-right"
              alt="Up to 70% off Clearance store"
              className="h-36 md:h-[80%] object-contain"
            />
            <h3 className="text-sm font-semibold">
              Up to 70% off Clearance store
            </h3>
            <p className="text-xs">starts at ₹2,999</p>
          </div>
          {/* Product Card */}
          <div className="flex w-full sm:w-[48%] lg:w-[19%] rounded-md flex-col items-center bg-white relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer p-4">
            <img
              src={WairedEarphone}
              data-aos="zoom-in"
              alt="Cheapest TWS Oneplus"
              className="h-36 md:h-[80%] object-contain"
            />
            <h3 className="text-sm font-semibold">Cheapest TWS Oneplus</h3>
            <p className="text-xs">starts at ₹999</p>
          </div>
          {/* Product Card */}
          <div className="flex w-full sm:w-[48%] lg:w-[19%] rounded-md flex-col items-center bg-white relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer p-4">
            <img
              src={SmartWatch}
              data-aos="fade-left"
              alt="Deals of Red Shots"
              className="h-36 md:h-[80%] object-contain"
            />
            <h3 className="text-sm font-semibold">Deals of Red Shots</h3>
            <p className="text-xs">starts at ₹1,299</p>
          </div>
          {/* Product Card */}
          <div className="flex w-full sm:w-[48%] lg:w-[19%] rounded-md flex-col items-center bg-white relative hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer p-4">
            <img
              src={HeadPhone}
              data-aos="fade-left"
              alt="50% off on selling fee*"
              className="h-36 md:h-[80%] object-contain"
            />
            <h3 className="text-sm font-semibold">50% off on selling fee*</h3>
            <p className="text-xs">starts at ₹1,999</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
