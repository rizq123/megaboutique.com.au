"use client";

import { useState } from "react";
import { FaTimes, FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa';

const categories = [
  {
    name: "Cookware",
    subcategories: [
      { title: "Pans", items: ["Frypans & Skillets", "Griddles & Grill Pans", "Roasting Pans", "Saute & Chef Pans", "Woks"] },
      { title: "Pots", items: ["Casserole Dishes", "Dutch & French Oven", "Pressure Cookers", "Saucepans", "Stockpots"] },
      { title: "Specialty Cookware", items: ["Fondue Sets", "Steamer"] },
      { title: "Cookware Accessories", items: ["Aprons", "Cookware Cleaners", "Gloves & Mitt", "Lids", "Pan Protectors", "Splatter Screens"] },
    ],
  },
  { name: "Kitchenware", subcategories: [] },
  { name: "Knives", subcategories: [] },
  { name: "Tableware", subcategories: [] },
  { name: "Home Decor", subcategories: [] },
  { name: "Home Living", subcategories: [] },
  { name: "Travel & Outdoor", subcategories: [] },
  { name: "Hampers & Gifts", subcategories: [] },
];

const otherLinks = [
  { name: "SHOP BY BRAND" },
  { name: "NEW ARRIVALS" },
  { name: "SALE" },
  { name: "CLEARANCE" },
];

const MobileNav = ({ onClose }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubcategory, setOpenSubcategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenSubcategory(null); // Close subcategories when a new category is opened
  };

  const toggleSubcategory = (subcategory) => {
    setOpenSubcategory(openSubcategory === subcategory ? null : subcategory);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto w-full max-w-full">
      <div className="flex justify-between p-4 border-b">
        <h3 className="font-bold text-lg">SHOP BY CATEGORY</h3>
        <button onClick={onClose} className="text-gray-700 text-2xl">
          <FaTimes />
        </button>
      </div>
      <div className="p-4 min-h-[617px]">
        {categories.map((category, index) => (
          <div key={index} className="border-b py-3">
            <div
              className={`flex justify-between items-center cursor-pointer font-medium ${openCategory === category.name ? 'text-[#fc6d46] font-bold' : 'text-gray-700'}`}
              onClick={() => toggleCategory(category.name)}
            >
              <span>{category.name}</span>
              {openCategory === category.name ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
            </div>
            {openCategory === category.name && category.subcategories.length > 0 && (
              <div className="mt-2 ml-4">
                {category.subcategories.map((sub, i) => (
                  <div key={i} className="mb-2">
                    <div
                      className={`flex justify-between items-center cursor-pointer font-medium ${openSubcategory === sub.title ? 'text-[#fc6d46] font-bold' : 'text-gray-700'}`}
                      onClick={() => toggleSubcategory(sub.title)}
                    >
                      <h3 className="font-semibold">{sub.title}</h3>
                      {openSubcategory === sub.title ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                    </div>
                    {openSubcategory === sub.title && (
                      <ul className="text-gray-600 text-sm mt-2 ml-4">
                        {sub.items.map((item, j) => (
                          <li key={j} className="py-1 text-[#333] text-[14px] font-semibold hover:text-red-500 cursor-pointer">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
      </div>
      <div className="mt-4 bg-black text-white p-4">
          {otherLinks.map((link, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700">
              <span className="text-white font-bold">{link.name}</span>
              <FaChevronRight className="text-gray-400" />
            </div>
          ))}
        </div>
    </div>
  );
};

export default MobileNav;
