import Image from 'next/image';

const brands = [
    {
        name: 'ALESSI',
        image: 'https://img-cdn-02.megaboutique.com.au/banners/alessi.webp',
        description:
            'Renowned for its innovative kitchenware, tableware, and home accessories, Alessi is synonymous with high-quality craftsmanship. Blending functionality with artistic flair, the brand collaborates with world-class designers and architects to create unique pieces that serve a purpose while enhancing the aesthetic of any space.',
    },
    {
        name: 'NORITAKE',
        image: 'https://img-cdn-02.megaboutique.com.au/banners/noritake.webp',
        description:
            'A prestigious Japanese brand renowned for its exquisite porcelain and ceramic tableware, characterized by fine craftsmanship and elegant designs. Noritake has a rich history of creating high-quality dinnerware, serving pieces, and decorative items that blend traditional artistry with modern aesthetics.',
    },
    {
        name: 'MASON CASH',
        image: 'https://img-cdn-02.megaboutique.com.au/banners/static-banner---mason-cash.jpg',
        description:
            'Mason Cash is known for its iconic mixing bowls and kitchenware, which have been a staple in kitchens for over 200 years. The brand combines traditional craftsmanship with contemporary design to create durable and stylish products that are perfect for everyday use.',
    },
    {
        name: 'TRAMONTINA LYON',
        image: 'https://img-cdn-02.megaboutique.com.au/banners/static-banner---tramontina-lyon.webp',
        description:
            'Tramontina Lyon offers high-quality cookware that combines innovative technology with elegant design. The brand is committed to providing durable and efficient kitchen solutions that enhance the cooking experience and deliver exceptional performance.',
    },
];

export default function BrandCards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {brands.map((brand, index) => (
          <div key={index} className="bg-white overflow-hidden group">
            <Image
              src={brand.image}
              alt={brand.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="pt-2">
              <h3 className="text-[1rem] font-bold text-gray-900 uppercase group-hover:text-red-500">{brand.name}</h3>
              <p className="text-gray-700 mt-2">{brand.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
