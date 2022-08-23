import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark mt-12 text-white p-16">
      <div className="grid grid-cols-5 gap-5">
        <div>
          <h2 className="text-xl mb-4">CUSTOMER CARE</h2>
          <ul className="space-y-4">
            <li className="hover:text-secondary cursor-pointer">Account</li>
            <li className="hover:text-secondary cursor-pointer">My Orders</li>
            <li className="hover:text-secondary cursor-pointer">Wishlist</li>
            <li className="hover:text-secondary cursor-pointer">FAQs</li>
            <li className="hover:text-secondary cursor-pointer">Supports</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl mb-4">ABOUT</h2>
          <ul className="space-y-4">
            <li className="hover:text-secondary cursor-pointer">
              Company Info
            </li>
            <li className="hover:text-secondary cursor-pointer">
              Interior Works
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl mb-4">USERS POLICY</h2>
          <ul className="space-y-4">
            <li className="hover:text-secondary cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-secondary cursor-pointer">
              Terms and Conditions
            </li>
            <li className="hover:text-secondary cursor-pointer">Data Policy</li>
            <li className="hover:text-secondary cursor-pointer">
              Coookies Policy
            </li>
            <li className="hover:text-secondary cursor-pointer">
              Refund Policy
            </li>
            <li className="hover:text-secondary cursor-pointer">
              Return Policy
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-xl mb-4"> CONNECT WITH US ON</h2>
            <div className="flex gap-5">
              <img
                src="/images/instagram.png"
                className="cursor-pointer"
                alt=""
              />
              <img className="cursor-pointer" src="/images/google.png" alt="" />
              <img
                className="cursor-pointer"
                src="/images/facebook.png"
                alt=""
              />
              <img
                className="cursor-pointer"
                src="/images/twitter.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl mt-8  mb-4"> SOON ON</h2>
            <div className="space-y-4">
              <img
                className="cursor-pointer"
                src="/images/googleplay.png"
                alt=""
              />
              <img
                className="cursor-pointer"
                src="/images/appstore.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-4">STAY CONNECTED</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <img src="/images/location.png" width={20} height={20} alt="" />
              <a
                target="_blank"
                rel="noopener"
                className="hover:text-secondary cursor-pointer"
                href="https://www.google.com/maps/place/New+Baneshwor,+Kathmandu+44600/@27.6946845,85.335441,16z/data=!3m1!4b1!4m5!3m4!1s0x39eb199a06c2eaf9:0xc5670a9173e161de!8m2!3d27.6915196!4d85.3420486"
              >
                Baneshwor, Kathmandu, Nepal
              </a>
            </div>
            <div className="flex items-start gap-4">
              <img src="/images/person.png" width={20} height={20} alt="" />
              <a
                href="tel:+977-9100000000"
                target="_blank"
                rel="noopener"
                className="hover:text-secondary"
              >
                +977-9100000000
              </a>
            </div>
            <div className="flex items-start gap-4">
              <img src="/images/person.png" width={20} height={20} alt="" />
              <a
                href="mailto:test@gmail.com"
                target="_blank"
                rel="noopener"
                className="hover:text-secondary"
              >
                test@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-16 flex-col items-center justify-center">
        <h2 className="text-xl  mb-2">Subscribe to get amazing offers</h2>
        <input
          type="text"
          className="p-5 rounded-md w-[445px] text-black outline-none"
          placeholder="Enter your email..."
        />
      </div>
    </div>
  );
};

export default Footer;
