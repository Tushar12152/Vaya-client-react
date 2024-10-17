import logo from "../assets/NavLogo.webp"
import visa from "../assets/visa.png"
import master from "../assets/master.png"
import paypal from "../assets/paypal.png"
import applepay from "../assets/applep-ay.webp"
import appstore from "../assets/app-store.webp"
import gpay from "../assets/google-play.webp"

import { FaFacebookF, FaTwitter, FaPinterest, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  


  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo and Contact Info */}
        <div>
          <img src={logo} alt="Vaya Logo" className="mb-4 w-28" />
          <p className="text-gray-600 mb-2">1927 Florence Street, Arlington, TX Texas 76011</p>
          <p className="text-gray-600 mb-2">Email us: <a href="mailto:support@storesupport.com" className="text-blue-600">support@storesupport.com</a></p>
          <p className="text-gray-600">Call us: +0123 456 789</p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600"><FaPinterest /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600"><FaYoutube /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600"><FaInstagram /></a>
          </div>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Here to Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Help & contact us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Our stores</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Our services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Customer services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Track your order</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Delivery & collection</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Returns & refunds</a></li>
          </ul>
        </div>

        {/* Shopping Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Shopping</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Wish List</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Buying guides</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Inspiration</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Gift Cards & vouchers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Shop by brand</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Secure shopping</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Offers</a></li>
          </ul>
        </div>

        {/* About Us Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contributions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Company information</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Investor relations</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Logo and media</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Our blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Supply chain</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Special events</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 mt-8 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Terms and Payment */}
          <div className="text-gray-600 text-center md:text-left">
            <p className="mb-2">Terms & conditions | Privacy | Cookies | Accessibility</p>
            <div className="flex space-x-4">
              <img src={visa} alt="Visa" className="w-8 h-6" />
              <img src={master} alt="Mastercard" className="w-8 h-6" />
              <img src={paypal} alt="PayPal" className="w-8 h-6" />
              <img src={applepay} alt="Apple Pay" className="w-8 h-6" />
            </div>
          </div>
          {/* App Store Links */}
          <div className="mt-4 md:mt-0 flex gap-6 items-center justify-center">
            <a href="#" className="mr-4"><img src={appstore} alt="App Store" className="w-32" /></a>
            <a href="#"><img src={gpay} alt="Google Play" className="w-32" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
