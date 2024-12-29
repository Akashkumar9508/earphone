import React from 'react';

const Product2 = () => {
    return (
        <div className='w-full flex justify-evenly py-10' >
           
            <div className=' w-[17%] flex flex-col gap-4 p-2 bg-red-400 shadow-2xl shadow-emerald-800 '>
                <img src="https://via.placeholder.com/200" alt="" />
                <div className='flex justify-between font-bold text-lg pt-4'>
                    <h1>MacBook pro 13"</h1>
                    <h1>$1,099.00</h1>
                </div>
                <p>256, 8 core GPU, 8GB</p>
                <p> ⭐⭐⭐⭐⭐ (121)</p>
                <button className=' hover:bg-blue-700 text-black font-semibold py-2 px-4   border-2 border-emerald-500 rounded-full'>
                    Add to Cart
                </button>
            </div>
            <div className='p-2 bg-red-400 w-[17%] flex flex-col gap-4 shadow-2xl shadow-emerald-800'>
                <img src="https://via.placeholder.com/200" alt="" />
                <div className='flex justify-between font-bold text-lg pt-4'>
                    <h1>Motorola 50 pro</h1>
                    <h1>$299.00</h1>
                </div>
                <p>256GB, Poled Display, 12GB</p>
                <p> ⭐⭐⭐⭐⭐ (14221)</p>
                <button className=' hover:bg-blue-700 text-black font-semibold py-2 px-4   border-2 border-emerald-500 rounded-full'>
                    Add to Cart
                </button>
            </div>
            <div className='p-2 bg-red-400 w-[17%] flex flex-col gap-4 shadow-2xl shadow-emerald-800'>
                <img src="https://via.placeholder.com/200" alt="" />
                <div className='flex justify-between font-bold text-lg pt-4'>
                    <h1>CMF Phone 2</h1>
                    <h1>$299.00</h1>
                </div>
                <p>256GB,Amoled Display, 8GB</p>
                <p> ⭐⭐⭐⭐⭐ (12341)</p>
                <button className=' hover:bg-blue-700 text-black font-semibold py-2 px-4   border-2 border-emerald-500 rounded-full'>
                    Add to Cart
                </button>
            </div>
            <div className=' w-[17%] p-2 bg-red-400 flex flex-col gap-4 shadow-2xl shadow-emerald-800'>
                <img src="https://via.placeholder.com/200" alt="" />
                <div className='flex justify-between font-bold text-lg pt-4 '>
                    <h1>GPU 4090x</h1>
                    <h1>$1,999.00</h1>
                </div>
                <p> 32 core GPU</p>
                <p> ⭐⭐⭐⭐⭐ (78)</p>
                <button className=' hover:bg-blue-700 text-black font-semibold py-2 px-4  border-2 border-emerald-500 rounded-full'>
                    Add to Cart
                </button>
            </div>
            <div className=' w-[17%] p-2 bg-red-400 flex flex-col gap-4 shadow-2xl shadow-emerald-800'>
                <img src="https://via.placeholder.com/200" alt="" />
                <div className='flex justify-between font-bold text-lg pt-4 '>
                    <h1>Keyboard</h1>
                    <h1>$199.00</h1>
                </div>
                <p>Machenical  Blue-Key</p>
                <p> ⭐⭐⭐⭐⭐ (121)</p>
                <button className=' hover:bg-blue-700 text-black font-semibold py-2 px-4  border-2 border-emerald-500 rounded-full'>
                    Add to Cart
                </button>
            </div>

        </div>
    );
};

export default Product2;