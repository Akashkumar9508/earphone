

const Product = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0 z-10"> 
          <div className="bg-white p-4 flex justify-between">
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Bluetooth Smartwatch" className="w-24" />
              <h3 className="text-sm font-semibold">Bluetooth Smartwatch</h3>
              <p className="text-xs">starts at ₹1,999</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm">
                Show Now
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Up to 70% off Clearance store" className="w-24" />
              <h3 className="text-sm font-semibold">Up to 70% off Clearance store</h3>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm">
                Show Now
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Cheapest TWS Oneplus" className="w-24" />
              <h3 className="text-sm font-semibold">Cheapest TWS Oneplus</h3>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm">
                Show Now
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Deals of Red Shots" className="w-24" />
              <h3 className="text-sm font-semibold">Deals of Red Shots</h3>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm">
                Show Now
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="50% off on selling fee*" className="w-24" />
              <h3 className="text-sm font-semibold">50% off on selling fee*</h3>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm">
                Show Now
              </button>
            </div>
          </div>
        </div>
      );
}

export default Product