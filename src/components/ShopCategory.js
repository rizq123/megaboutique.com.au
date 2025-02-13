"use client";

import { useState } from "react";
import Image from 'next/image';

const categories = [
  {
    name: "Cookware",
    subcategories: [
      { title: "Pans", items: ["Frypans & Skillets", "Griddles & Grill Pans", "Roasting Pans", "Saute & Chef Pans", "Woks"] },
      { title: "Pots", items: ["Casserole Dishes", "Dutch & French Oven", "Pressure Cookers", "Saucepans", "Stockpots"] },
      { title: "Specialty Cookware", items: ["Fondue Sets", "Steamer"] },
      { title: "Cookware Accessories", items: ["Aprons", "Cookware Cleaners", "Gloves & Mitt", "Lids", "Pan Protectors", "Splatter Screens"] },
    ],
    brands: ["Alessi", "Anolon Cookware", "Ashdene", "Avanti", "Bakemaster", "Baker's Secret", "Ballarini", "BergHOFF", "Blacklock By Lodge", "Chasseur", "Circulon Cookware", "Eco Ladelle", "Emile Henry", "Essteele Cookware", "EuroScrubby", "More Brands"],
  },
  { name: "Kitchenware", subcategories: [] },
  { name: "Knives", subcategories: [] },
  { name: "Tableware", subcategories: [] },
  { name: "Home Decor", subcategories: [] },
  { name: "Home Living", subcategories: [] },
  { name: "Travel & Outdoor", subcategories: [] },
  { name: "Hampers & Gifts", subcategories: [] },
];

const ListCategoryMenu = () => {
  const [openCategory, setOpenCategory] = useState("Cookware");

  return (
    <div className="relative">
      {/* Trigger Button with Animated Hamburger Icon */}
      <div className="relative group">
        <div className="flex items-center">
          <div className="flex flex-col gap-1 w-6 h-6 cursor-pointer group mt-2">
            <span className="block w-6 h-[2px] bg-gray-700 transition-all duration-300 group-hover:translate-y-[6px] group-hover:rotate-45"></span>
            <span className="block w-6 h-[2px] bg-gray-700 transition-all duration-300 opacity-100 group-hover:opacity-0"></span>
            <span className="block w-6 h-[2px] bg-gray-700 transition-all duration-300 group-hover:-translate-y-[6px] group-hover:-rotate-45"></span>
          </div>
          <button className="ml-2 text-[#333] font-bold hover:bg-gray-100">SHOP BY CATEGORY</button>
        </div>

        {/* Dropdown Menu */}
        <div className="absolute left-0 w-[1000px] bg-white shadow-lg border hidden group-hover:block z-10">
          <div className="flex">
            {/* Left Sidebar */}
            <div className="w-1/4 bg-gray-100 p-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`py-2 px-3 cursor-pointer ${openCategory === category.name ? "text-red-500 font-bold" : "text-gray-700"}`}
                  onMouseEnter={() => setOpenCategory(category.name)}
                >
                  {category.name}
                </div>
              ))}
            </div>

            {/* Right Content */}
            <div className="w-3/4 p-4 grid grid-cols-3 gap-6">
              {categories.map(
                (category, index) =>
                  openCategory === category.name &&
                  category.subcategories.length > 0 && (
                    <div key={index}>
                      {category.subcategories.map((sub, i) => (
                        <div key={i} className="mb-3">
                          <h3 className="font-bold">{sub.title}</h3>
                          <ul className="text-gray-600 text-sm">
                            {sub.items.map((item, j) => (
                              <li key={j} className="py-1 text-[#333] text-[14px] font-semibold hover:text-red-500 cursor-pointer">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )
              )}

              {/* Brands Section */}
              {openCategory === "Cookware" && (
                <div>
                  <h3 className="font-bold">Brands</h3>
                  <ul className="text-gray-600 text-sm grid grid-cols-2 gap-2">
                    {categories[0].brands.map((brand, i) => (
                      <li key={i} className="py-1 text-[#333] text-[14px] font-semibold hover:text-red-500 cursor-pointer">
                        {brand}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Image Section */}
              {openCategory === "Cookware" && (
                <div className="flex items-center justify-center">
                  <Image src="https://img-cdn-01.megaboutique.com.au/400x400/Design/Cookware.jpg" alt="Cookware Item" width={160} height={160} className="w-40 h-auto" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCategoryMenu;
