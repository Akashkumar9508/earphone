import tablePng from "../assets/tablePng.jpg";
import BookPng from "../assets/books.png";
import Cloths from '../assets/cloths.png';
import Sofa from  '../assets/sofa.png';

const OffSection = () => {
  return (
    <div data-aos="fade-up" className="container mx-auto w-full mb-20 mt-20 px-4">
      <h2 className="text-2xl font-semibold mb-10 text-center">Get Up To 70% Off</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        
        {/* Sofa Section */}
        <div className="flex flex-col items-center justify-center bg-yellow-100 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <h3 className="text-lg font-semibold">Save</h3>
          <h2 className="text-3xl font-bold mb-2">$100</h2>
          <p className="text-sm text-gray-500 text-center">Explore Our Furniture & Home Furnishing Range</p>
          <img src={Sofa} alt="Sofa" className="w-full h-40 object-cover rounded-t-lg" />
        </div>

        {/* Book Section */}
        <div className="flex flex-col items-center justify-center bg-orange-100 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <h3 className="text-lg font-semibold">Save</h3>
          <h2 className="text-3xl font-bold mb-2">$29</h2>
          <p className="text-sm text-gray-500 text-center">Enjoy Discount on all types of Books & Gadgets</p>
          <img src={BookPng} alt="Books" className="w-full h-40 object-cover rounded-t-lg" />
        </div>

        {/* Clothes Section */}
        <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <h3 className="text-lg font-semibold">Save</h3>
          <h2 className="text-3xl font-bold mb-2">$67</h2>
          <p className="text-sm text-gray-500 text-center">Explore Our Collection of Dresses for Men</p>
          <img src={Cloths} alt="Cloths" className="w-full h-40 object-cover rounded-t-lg" />
        </div>

        {/* Table Section */}
        <div className="flex flex-col items-center justify-center bg-green-100 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <h3 className="text-lg font-semibold">Save</h3>
          <h2 className="text-3xl font-bold mb-2">$59</h2>
          <p className="text-sm text-gray-500 text-center">Enjoy Discount on all types of Educational Accessories</p>
          <img src={tablePng} alt="Table" className="w-full h-40 object-cover rounded-t-lg" />
        </div>

      </div>
    </div>
  );
};

export default OffSection;
