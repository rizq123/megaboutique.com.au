import ShopCategory from "./ShopCategory";
import Image from 'next/image';

const Nav = () => {
  return (
    <>
      <nav className="bg-white shadow-md border-b hidden md:block">
        <div className="container mx-auto flex items-center px-6">
          {/* SHOP BY CATEGORY with separator */}
          <div className="relative flex items-center pr-6 border-r mr-6">
            <ShopCategory />
          </div>

          {/* Other Menu Items */}
          <div className="flex space-x-8 py-2">
            {["SHOP BY BRAND", "NEW ARRIVALS", "SALE", "CLEARANCE", "GIFTS", "BLOGS"].map((item, index) => (
              <a key={index} href="#" className="text-black font-semibold text-sm hover:text-red-500 transition bg-opacity-0 hover:bg-opacity-10 px-2 py-1 rounded cursor-pointer">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="bg-[#363434] text-white hidden md:block">
        <div className="h-[35px] max-w-[1200px] mx-auto flex justify-evenly items-center px-3">
          <div className="flex items-center gap-2 hover:opacity-75 hover:text-red-500 cursor-pointer">
            <Image src="/images/shipping.png" alt="Free Shipping" width={30} height={30} />
            <p>Free Shipping over $99</p>
          </div>
          <div className="flex items-center gap-2 hover:opacity-75 hover:text-red-500 cursor-pointer">
            <Image src="/images/return_white.png" alt="100-Day Returns" width={25} height={25} />
            <p>100-Day Returns</p>
          </div>
          <div className="flex items-center gap-2 hover:opacity-75 hover:text-red-500 cursor-pointer">
            <Image src="/images/australia_white.png" alt="Australian Family Business" width={25} height={25} />
            <p>Australian Family Business</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
