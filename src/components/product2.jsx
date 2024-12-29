import Mac from '../assets/Mac.png'
import Moto from '../assets/Moto.png'
import Cmf from '../assets/Cmf.png'
import Rtx from '../assets/Rtx.png'
import KeyBoard2 from '../assets/KeyBoard2.png'

const Product2 = () => {
    return (
        <div className='w-full flex justify-evenly py-10 mt-20 mb-20' >
           
            <div className=' w-[19%] flex flex-col gap-4 p-2 shadow-2xl shadow-gray-400 '>
                <img src={Mac} alt=""  className='h-[60%]' />
                <div className='flex justify-between font-bold text-lg pt-4'>
                    <h1>MacBook pro 13</h1>
                    <h1>$1,099.00</h1>
                </div>
                <p>256, 8 core GPU, 8GB</p>
                <p> ⭐⭐⭐⭐⭐ (121)</p>
                <button className=' hover:bg-green-400 text-black font-semibold py-2 px-4   border-2 border-emerald-500 rounded-full'>
                    Add to Cart
                </button>
            </div>
            <div className='p-2  w-[19%] flex flex-col gap-4 shadow-2xl shadow-gray-400 '>
                <img src={Moto} alt=""  className='h-[60%]' />
                <div className='flex justify-between font-bold text-lg pt-4'>
                    <h1>Motorola 50 pro</h1>
                    <h1>$299.00</h1>
                </div>
                <p>256GB, Poled Display, 12GB</p>
                <p> ⭐⭐⭐⭐⭐ (14221)</p>
                <button className=' hover:bg-green-400 text-black font-semibold py-2 px-4   border-2 border-emerald-500 rounded-full'>
                    Add to Cart
                </button>
            </div>
            <div className='p-2  w-[19%] flex flex-col gap-4 shadow-2xl shadow-gray-400 '>
                <img src={Cmf} alt="" className='h-[60%]' />
                <div className='flex justify-between font-bold text-lg pt-4'>
                    <h1>CMF Phone 1</h1>
                    <h1>$299.00</h1>
                </div>
                <p>256GB,Amoled Display, 8GB</p>
                <p> ⭐⭐⭐⭐⭐ (12341)</p>
                <button className=' hover:bg-green-400 text-black font-semibold py-2 px-4   border-2 border-emerald-500 rounded-full'>
                    Add to Cart
                </button>
            </div>
            <div className=' w-[19%] p-2  flex flex-col gap-4 shadow-2xl shadow-gray-400 '>
                <img src={Rtx} alt="" className='h-[60%]'/>
                <div className='flex justify-between font-bold text-lg pt-4 '>
                    <h1>GPU 4090x</h1>
                    <h1>$1,999.00</h1>
                </div>
                <p> 32 core GPU</p>
                <p> ⭐⭐⭐⭐⭐ (78)</p>
                <button className=' hover:bg-green-400 text-black font-semibold py-2 px-4  border-2 border-emerald-500 rounded-full'>
                    Add to Cart
                </button>
            </div>
            <div className=' w-[19%] p-2  flex flex-col gap-4 shadow-2xl shadow-gray-400 '>
                <img src={KeyBoard2} alt=""  className='h-[60%]'/>
                <div className='flex justify-between font-bold text-lg pt-4 '>
                    <h1>Keyboard</h1>
                    <h1>$199.00</h1>
                </div>
                <p>Machenical  Blue-Key</p>
                <p> ⭐⭐⭐⭐⭐ (121)</p>
                <button className=' hover:bg-green-400 text-black font-semibold py-2 px-4  border-2 border-emerald-500 rounded-full'>
                    Add to Cart
                </button>
            </div>

        </div>
    );
};

export default Product2;