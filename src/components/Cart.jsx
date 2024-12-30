import HeadPhone from "../assets/headphone.png";

const Cart = () => {
    return (
        <div className="bg-white flex flex-col lg:flex-row p-4 lg:p-8 justify-evenly">
            {/* Left Section */}
            <div className="h-full lg:w-1/2 w-full">
                <p className="pb-4 text-sm lg:text-base">
                    Electronic / Audio / Headphone / Shop Headphone by Type / <span className="font-bold">Airpods-Max</span>
                </p>
                <div >
                    <img
                        src={HeadPhone}
                        alt="Main product"
                        className="w-[82%] object-cover border-2 border-blue-900 rounded-2xl"
                    />
                </div>
                <div className="flex justify-evenly h-36 gap-3 lg:gap-6 pt-4 lg:pt-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="border-black h-full w-20 lg:w-36 border-2 rounded-xl cursor-pointer">
                            <img src={HeadPhone} alt={`Thumbnail ${item}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 w-full h-full lg:pl-14 mt-6 lg:mt-0">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl lg:text-3xl font-bold">Airpods-Max</h1>
                    <p className="text-gray-500 text-sm lg:text-base lg:w-2/3">
                        A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.
                    </p>
                    <p className="text-sm lg:text-base">4.9 rating (12334)</p>
                </div>

                <div className="h-[1px] w-full lg:w-2/3 bg-gray-300 mt-4 lg:mt-6"></div>

                <div className="mt-4 lg:mt-6">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                        <p className="text-xl lg:text-2xl font-bold">$869</p>
                        <p className="font-bold text-base lg:text-2xl lg:ml-4">or $99.99/month</p>
                    </div>
                    <p className="text-sm lg:text-base mt-2 lg:mt-4">
                        Suggested payment with 6 months special financing
                    </p>
                </div>

                <div className="h-[1px] w-full lg:w-2/3 bg-gray-300 mt-4 lg:mt-6"></div>

                <div className="mt-4 lg:mt-6">
                    <h3 className="text-sm lg:text-base">Choose a color</h3>
                    <div className="flex gap-2 mt-2">
                        {["bg-red-400", "bg-blue-600", "bg-gray-600", "bg-pink-400", "bg-white"].map((color, index) => (
                            <div
                                key={index}
                                className={`border-2 border-gray-400 h-8 w-8 lg:h-10 lg:w-10 rounded-full ${color}`}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="h-[1px] w-full lg:w-2/3 bg-gray-300 mt-4 lg:mt-6"></div>

                <div className="mt-4 lg:mt-6 flex flex-col lg:flex-row gap-4">
                    <button className="w-full lg:w-44 h-10 rounded-full bg-green-800 text-white flex justify-center items-center">
                        Buy Now
                    </button>
                    <button className="w-full lg:w-44 h-10 rounded-full border-2 border-gray-500 flex justify-center items-center">
                        Add to Cart
                    </button>
                </div>

                <div className="border-2 border-gray-700 mt-6 h-auto lg:h-[11rem] w-full lg:w-2/3 flex flex-col">
                    <div className="h-auto lg:h-1/2 border-b-2 border-gray-700 flex flex-col justify-start items-start p-4">
                        <h4 className="text-sm lg:text-base">Free Delivery</h4>
                        <a href="#" className="text-sm lg:text-base">
                            Enter your pincode for delivery address
                        </a>
                    </div>
                    <div className="h-auto lg:h-1/2 flex flex-col justify-start items-start p-4">
                        <h4 className="text-sm lg:text-base">Return Delivery</h4>
                        <p className="text-sm lg:text-base">30-day trial return</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
