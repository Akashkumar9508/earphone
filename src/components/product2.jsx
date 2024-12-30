import Mac from '../assets/Mac.png'
import Moto from '../assets/Moto.png'
import Cmf from '../assets/Cmf.png'
import Rtx from '../assets/Rtx.png'
import KeyBoard2 from '../assets/KeyBoard2.png'

const Product2 = () => {
    return (
        <div className='w-full py-10 mt-20 mb-20 px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                
                {/* MacBook Pro 13 */}
                <div data-aos="fade-up" className='flex flex-col gap-4 p-4 shadow-2xl shadow-gray-400 rounded-lg'>
                    <img src={Mac} alt="MacBook Pro 13" className='h-[60%] object-cover' />
                    <div className='flex justify-between font-bold text-lg pt-4'>
                        <h1>MacBook pro 13</h1>
                        <h1>$1,099.00</h1>
                    </div>
                    <p>256, 8 core GPU, 8GB</p>
                    <p>⭐⭐⭐⭐⭐ (121)</p>
                    <button className='hover:bg-green-400 text-black font-semibold py-2 px-4 border-2 border-emerald-500 rounded-full'>
                        Add to Cart
                    </button>
                </div>
                
                {/* Motorola 50 Pro */}
                <div data-aos="fade-up" className='flex flex-col gap-4 p-4 shadow-2xl shadow-gray-400 rounded-lg'>
                    <img src={Moto} alt="Motorola 50 Pro" className='h-[60%] object-cover' />
                    <div className='flex justify-between font-bold text-lg pt-4'>
                        <h1>Motorola 50 Pro</h1>
                        <h1>$299.00</h1>
                    </div>
                    <p>256GB, Poled Display, 12GB</p>
                    <p>⭐⭐⭐⭐⭐ (14,221)</p>
                    <button className='hover:bg-green-400 text-black font-semibold py-2 px-4 border-2 border-emerald-500 rounded-full'>
                        Add to Cart
                    </button>
                </div>
                
                {/* CMF Phone 1 */}
                <div data-aos="fade-up" className='flex flex-col gap-4 p-4 shadow-2xl shadow-gray-400 rounded-lg'>
                    <img src={Cmf} alt="CMF Phone 1" className='h-[60%] object-cover' />
                    <div className='flex justify-between font-bold text-lg pt-4'>
                        <h1>CMF Phone 1</h1>
                        <h1>$299.00</h1>
                    </div>
                    <p>256GB, Amoled Display, 8GB</p>
                    <p>⭐⭐⭐⭐⭐ (12,341)</p>
                    <button className='hover:bg-green-400 text-black font-semibold py-2 px-4 border-2 border-emerald-500 rounded-full'>
                        Add to Cart
                    </button>
                </div>
                
                {/* RTX 4090 GPU */}
                <div data-aos="fade-up" className='flex flex-col gap-4 p-4 shadow-2xl shadow-gray-400 rounded-lg'>
                    <img src={Rtx} alt="RTX 4090 GPU" className='h-[60%] object-cover' />
                    <div className='flex justify-between font-bold text-lg pt-4'>
                        <h1>GPU 4090x</h1>
                        <h1>$1,999.00</h1>
                    </div>
                    <p>32 core GPU</p>
                    <p>⭐⭐⭐⭐⭐ (78)</p>
                    <button className='hover:bg-green-400 text-black font-semibold py-2 px-4 border-2 border-emerald-500 rounded-full'>
                        Add to Cart
                    </button>
                </div>
                
                {/* Keyboard */}
                <div data-aos="fade-up" className='flex flex-col gap-4 p-4 shadow-2xl shadow-gray-400 rounded-lg'>
                    <img src={KeyBoard2} alt="Keyboard" className='h-[60%] object-cover' />
                    <div className='flex justify-between font-bold text-lg pt-4'>
                        <h1>Keyboard</h1>
                        <h1>$199.00</h1>
                    </div>
                    <p>Mechanical Blue-Key</p>
                    <p>⭐⭐⭐⭐⭐ (121)</p>
                    <button className='hover:bg-green-400 text-black font-semibold py-2 px-4 border-2 border-emerald-500 rounded-full'>
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Product2;
