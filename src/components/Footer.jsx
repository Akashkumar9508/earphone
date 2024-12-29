
import Logo from '../assets/logo.png';
import { IoBagRemoveOutline } from "react-icons/io5";
import { GrGift } from "react-icons/gr";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Family from '../assets/family.png';
import Mobile from '../assets/Mobile.png';
import DeleveryBoy from '../assets/DeleveryBoy.png';
import StripeLogo from '../assets/StripeLogo.png';
import Visa from '../assets/Visa.png';
import Apay from '../assets/Apay.png';
import MasterCard from '../assets/MasterCard.png';
import GPLogo from '../assets/GPLogo.png';
import APLogo from '../assets/APLogo.png';
import Paytm from '../assets/Paytm.png';
import PhonePe from '../assets/PhonePe.png';
const Footer = () => {
    return (
        <div>
            <div className=" p-4 rounded-lg mb-20 mt-20 ">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className=" p-4 h-[300px]  overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer rounded-md ">
                        <h3 className="text-3xl font-semibold mb-2">Frequently Asked Questions</h3>
                        <p>Information about online payment methods, security measures, etc.</p>
                        <img src={Family} alt="Frequently Asked Questions"  className='w-auto h-auto rounded-md' />
                    </div>
                    <div className="bg-white p-4 rounded-lg  h-[300px]  overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                        <h3 className="text-3xl font-semibold mb-2">Online Payment Process</h3>
                        <p>Details on home delivery services, areas covered, estimated delivery times, etc.</p>
                        <img src={DeleveryBoy} alt="Home Delivery Options" />
                    </div>
                    <div className="bg-white p-4 rounded-lg  h-[300px]  overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                        <h3 className="text-3xl font-semibold mb-2">Home Delivery Options</h3>
                        <p>Information about safety protocols, hygiene measures, etc.</p>
                        <img src={Mobile} alt="Updates on Safe Shopping in our Stores" />
                    </div>
                </div>
            </div>
            <footer className="footer ">
                <div className="container">
                    <div className="row  flex-row gap-10 flex justify-evenly">
                        <div className="col-md-3  w-[35%] relative left-10 ">
                            <div className="footer-logo gap-4 flex flex-col w-[80%]">
                                <img src={Logo} alt="Shopcart Logo " className='w-36' />
                                <p className="text-sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet site officia consequat duis enim velit mollit.</p>
                            </div>
                            <div className="footer-payments pt-8">
                                <h3>Accepted Payments</h3>
                                <div className="footer-payments-logo  gap-3 flex flex-col pt-5">
                                    <div className=' flex gap-7'>
                                        <img src={StripeLogo} alt="Stripe Logo" className=' w-18 h-6 ' />
                                        <img src={Visa} alt="Visa Logo" className=' w-18 h-5   ' />
                                        <img src={Apay} alt="Amazon Pay Logo" className=' w-18 h-6 ' />
                                        <img src={MasterCard} alt="Mastercard Logo" className=' w-18 h-6 ' />
                                    </div>
                                    <div className=' flex gap-7'>
                                        <img src={GPLogo} alt="Google Pay Logo" className=" w-18 h-6  " />
                                        <img src={APLogo} alt="Apple Pay Logo" className=" w-18 h-6  " />
                                        <img src={Paytm} alt="Paytm Logo" className=' w-18 h-6 ' />
                                        <img src={PhonePe} alt="Phonepe Logo" className=' w-18 h-6  ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 pl-7">
                            <h3 className='font-bold'>Department</h3>
                            <ul className='pt-5'>
                                <li>Fashion</li>
                                <li>Education Product</li>
                                <li>Frozen Food</li>
                                <li>Beverages</li>
                                <li>Organic Grocery</li>
                                <li>Office Supplies</li>
                                <li>Beauty Products</li>
                                <li>Books</li>
                                <li>Electronics & Gadget</li>
                                <li>Travel Accesories</li>
                                <li>Fitness</li>
                                <li>Sneakers</li>
                                <li>Toys</li>
                                <li>Furniture</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className='font-bold'>About us</h3>
                            <ul className='pt-5'>
                                <li>About shopcart</li>
                                <li>Careers</li> <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className='font-bold'>Follow Us</h3>
                            <ul className="social-media pt-5">
                                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className='font-bold'>Help</h3>
                            <ul className='pt-5'>
                                <li>Shopcart Help</li>
                                <li>Returns</li>
                                <li>Track orders</li>
                                <li>Contact us</li>
                                <li>Feedback</li>
                                <li>Security & Frauc</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottomn flex  justify-between px-10">
                    <div className='flex gap-10 '>
                        <div className='flex justify-center items-center gap-2'>
                            <IoBagRemoveOutline className='h-5' />
                            <p className='flex '>Become a seller</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <GrGift />
                            <p className='flex '>gift cards </p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <IoIosHelpCircleOutline />
                            <p className='flex '>Help</p>
                        </div>

                    </div>

                    <p className='flex'>&copy; 2023 Shopcart. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
