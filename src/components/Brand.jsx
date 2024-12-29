
import Staple from "../assets/staple.png";
import Sprouts from '../assets/sprouts.png';
import GroceryOutlet from '../assets/GroceryOutlet.png';
import MollieStones from '../assets/MollieStones.png';
import SportsBasement from '../assets/SportsBasement.png';
import ContainerStore from '../assets/ContainerStore.png';
import target from '../assets/target.png';
import Bemo from "../assets/bemo.png";
const Brand = () => {
  return (
    <div className="container mx-auto">
  <h2 className="text-2xl font-semibold mb-4 text-center ">Choose By Brand</h2>

  <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
    <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={Staple} alt="Staples" className="w-20 h-20 mb-2 " />
      <h3 className="text-lg font-semibold">Staples</h3>
      <p className="text-sm text-gray-500">Delivery within 24 hours</p>
    </div>

    <div data-aos="fade-up" className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={Sprouts} alt="Sprouts" className="w-20 h-20 mb-2" />
      <h3 className="text-lg font-semibold">Sprouts</h3>
      <p className="text-sm text-gray-500">Delivery within 24 hours</p>
    </div>

    <div data-aos="fade-up" className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={GroceryOutlet} alt="Grocery Outlet" className="w-20 h-20 mb-2" />
      <h3 className="text-lg font-semibold">Grocery Outlet</h3>
      <p className="text-sm text-gray-500">Delivery within 24 hours</p>
    </div>

    <div data-aos="fade-up" className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={MollieStones} alt="Mollie Stones" className="w-20 h-20 mb-2" />
      <h3 className="text-lg font-semibold">Mollie Stones</h3>
      <p className="text-sm text-gray-500">Delivery within 24 hours</p>
    </div>

    <div data-aos="fade-up" className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={SportsBasement} alt="Sports Basement" className="w-20 h-20 mb-2" />
      <h3 className="text-lg font-semibold">Sports Basement</h3>
      <p className="text-sm text-gray-500">Delivery within 24 hours</p>
    </div>

    <div data-aos="fade-up" className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={ContainerStore} alt="Container Store" className="w-20 h-20 mb-2 rounded-[50%]" />
      <h3 className="text-lg font-semibold">Container Store</h3>
      <p className="text-sm text-gray-500">Delivery within 24 hours</p>
    </div>

    <div data-aos="fade-up" className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={target} alt="Target" className="w-20 h-20 mb-2" />
      <h3 className="text-lg font-semibold">Target</h3>
      <p className="text-sm text-gray-500">Delivery within 24 hours</p>
    </div>

    <div data-aos="fade-up" className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={Bemo} alt="BevMo!" className="w-20 h-20 mb-2" />
      <h3 className="text-lg font-semibold">BevMo!</h3>
      <p className="text-sm text-gray-500">Delivery within 24 hours</p>
    </div>
  </div>
</div>
  )
}

export default Brand