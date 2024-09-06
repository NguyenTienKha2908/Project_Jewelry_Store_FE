import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="bg-blue-500 text-center text-white p-2">
        Our Biggest Sale of the Year <a href=""> | Details </a>
      </div>
      <div className="flex justify-between pt-2 pb-2">
        <div className="flex">
          <div className="ps-4 pe-4">0369765129</div>
          <div className="ps-4 pe-4">Stores</div>
        </div>
        <div>Kha</div>
      </div>
      <nav className="flex pt-5 pb-5">
        <div className="flex ps-2 pe-2">
          <img
            src="/assets/images/logo-TK-jewelry.png"
            alt="logo-website"
            className="size-11"
          />
          <p className="flex items-center font-bold font-serif text-3xl">TK Jewelry</p>
        </div>

        <div className="flex items-center">
          <div className="ps-2 pe-2">Diamonds</div>
          <div className="ps-2 pe-2">Engagement Rings</div>
          <div className="ps-2 pe-2">Wedding Rings</div>
          <div className="ps-2 pe-2">Jewelry</div>
          <div className="ps-2 pe-2">Gifts</div>
          <div className="ps-2 pe-2">Gemstones</div>
          <div className="ps-2 pe-2">Education</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
