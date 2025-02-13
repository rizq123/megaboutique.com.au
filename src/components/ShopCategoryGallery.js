import Image from 'next/image';

const categories = [
  { name: 'Cookware', image: '/category-shop/cookware-webp.webp' },
  { name: 'Kitchenware', image: '/category-shop/kitchenware-webp.webp' },
  { name: 'Knives', image: '/category-shop/knives-webp.webp' },
  { name: 'Tableware', image: '/category-shop/tableware-webp.webp' },
  { name: 'Home Decor', image: '/category-shop/home-decor-webp.webp' },
  { name: 'Home Living', image: '/category-shop/home-living-webp.webp' },
  { name: 'Travel & Outdoor', image: '/category-shop/outdoor-webp.webp' },
  { name: 'Drinkware', image: '/category-shop/drinkware-webp.webp' },
];

export default function ShopCategory() {
  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="font-bold text-center mb-[12px] text-lg md:text-2xl">SHOP BY CATEGORY</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
        {categories.map((category, index) => (
          <div key={index} className="relative group cursor-pointer text-center overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden lg:block mt-2">
              <span className="text-orange-600 font-bold text-sm uppercase">{category.name}</span>
            </div>
            <div className="lg:hidden absolute inset-x-0 bottom-0 bg-[rgba(255,255,255,.85)] text-center py-2">
              <span className="text-orange-600 font-bold text-sm uppercase">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
