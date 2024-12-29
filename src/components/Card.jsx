import React from 'react'

const Card = () => {
    return (
        <div className='bg-white flex p-8 justify-evenly'>
            <div className=' h-full w-1/2'>
                <p className='pb-4'> Electronic / Audio / Headphone / shop Headphone by type / <span className='font-bold'>aripods-max</span></p>
                <div>
                    <img src="https://via.placeholder.com/100" alt="" className='w-full h-[33rem] border-2 border-blue-900 rounded-2xl ' />
                </div>
                <div className='flex justify-evenly h-36 gap-6 pt-8'>
                    <div className='border-black h-full w-36 border-2 rounded-xl '>
                        <img src="" alt="1" srcset="" />
                    </div>
                    <div className='border-black h-full w-36 border-2 rounded-xl '>
                        <img src="" alt="2" srcset="" />
                    </div>
                    <div className='border-black h-full w-36 border-2 rounded-xl '>
                        <img src="" alt="3" srcset="" />
                    </div>
                    <div className='border-black h-full w-36 border-2 rounded-xl '>
                        <img src="" alt="4" srcset="" />
                    </div>
                </div>

            </div>
            <div className='w-1/2= h-full relative left-14'>
                <div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl font-bold'>Airpods-Max</h1>
                        <p className='text-gray-500 w-2/3'>a perfect balance of exhitarating high-fidelity audio and the effortless magic of  Airpods.</p>
                        <p>4.9 rating(12334)</p>
                    </div>

                    <div className='h-1 w-2/3 bg-gray-300 mt-6'></div>


                    <div>
                        <div className='flex  mt-6'>
                            <p className='text-2xl font-bold'>$869</p><p className='font-bold ml-4 text-2xl'>or $99.99/month</p>
                        </div>
                        <div className='flex  mt-6'>
                            <p>suggested payment with 6 months special fianceing </p>
                        </div>
                    </div>

                    <div className='h-1 w-2/3 bg-gray-300 mt-6'></div>

                    <div>
                        <div className='flex  mt-6 flex-col'>
                            <h3>choose a color</h3>
                            <div className='flex gap-2 flex-col'>
                                <div></div>
                                <div className='flex gap-2'>
                                    <div className=' border-2 border-gray-400 h-10 w-10 rounded-full bg-red-400'></div>
                                    <div className=' border-2 border-gray-400 h-10 w-10 rounded-full bg-blue-600'></div>
                                    <div className=' border-2 border-gray-400 h-10 w-10 rounded-full bg-gray-600'></div>
                                    <div className=' border-2 border-gray-400 h-10 w-10 rounded-full bg-pink-400'></div>
                                    <div className=' border-2 border-gray-400 h-10 w-10 rounded-full bg-white'></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='h-1 w-2/3 bg-gray-300 mt-6'></div>

                    <div>
                        <div className='flex  mt-6 flex-row gap-10'>
                            <div className='w-44 h-10  rounded-full bg-green-800   border-2 border-gray-500 flex justify-center items-center ' >
                                <h1>Buy Now</h1>
                            </div>
                            <div className='w-44 h-10  rounded-full    border-2 border-gray-50 flex justify-center items-center '>
                                <h1>Add to Cart</h1>
                            </div>

                        </div>
                    </div>



                    <div className='border-2 border-gray-700 mt-6 h-[11rem] w-2/3 flex flex-col'>
                        <div className=' h-1/2 border-gray-700  border-b-2  flex flex-col justify-start items-start p-4'>

                            <h4 className=''>Free delivery</h4>
                            <a href='#'>Enter your pincode for delivery address </a>
                        </div>
                        <div className=' h-1/2  border-b-2  flex flex-col justify-start items-start p-4'>
                        <h4>Return delivery</h4>
                        <p> 30 day trial return </p>
                        </div>
                    </div>


                </div>

            </div>
        </div >

    )
}
export default Card;