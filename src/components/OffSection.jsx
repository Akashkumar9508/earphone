import tablePng from "../assets/tablePng.jpg";
import BookPng from "../assets/books.png";
import Cloths from '../assets/cloths.png';
import Sofa from  '../assets/sofa.png';

const OffSection = () => {
  return (
    <div data-aos="fade-up" className="container mx-auto w-full mb-20 mt-20">
  <h2 className="text-2xl font-semibold mb-10 text-center">Get Up To 70% Off</h2>

  <div className="flex justify-center gap-4  w-full">
    <div className="flex flex-col items-center overflow-hidden justify-center w-[21%]  rounded-lg shadow-md hover:shadow-lg  bg-yellow-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <h3 className="text-lg font-semibold">Save</h3>
      <h2 className="text-3xl font-bold mb-2">$100</h2>
      <p className="text-sm text-gray-500">Explore Our Furniture & Home Furnishing Range</p>
      <img src={Sofa} alt=""  />
    </div>

    <div className="flex flex-col items-center justify-center w-[21%]  rounded-lg shadow-md hover:scale-105 transition-transform ease-in-out cursor-pointer duration-300 bg-orange-100">
      <h3 className="text-lg font-semibold">Save</h3>
      <h2 className="text-3xl font-bold mb-2">$29</h2>
      <p className="text-sm text-gray-500">Enjoy Discount all types of Books & Gadgets Item</p>
      <img src={BookPng} alt="" />
    </div>

    <div className="flex flex-col items-center justify-center w-[21%]  rounded-lg shadow-md hover:shadow-lg  bg-blue-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <h3 className="text-lg font-semibold">Save</h3>
      <h2 className="text-3xl font-bold mb-2">$67</h2>
      <p className="text-sm text-gray-500">Explore Our all types Dresses for Men</p>
      <img src={Cloths} alt="" />
    </div>

    <div className="flex flex-col items-center justify-center w-[21%] rounded-lg shadow-md hover:shadow-lg  bg-green-100 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <h3 className="text-lg font-semibold">Save</h3>
      <h2 className="text-3xl font-bold mb-2">$59</h2>
      <p className="text-sm text-gray-500">Enjoy Discount all types of Educational accessories</p>
      <img src={tablePng} alt="" />
    </div>
  </div>
</div>
  )
}

export default OffSection