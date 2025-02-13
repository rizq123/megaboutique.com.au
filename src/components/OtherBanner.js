import Image from 'next/image';
import Link from 'next/link';

const banners = {
  store: {
    image: '/images/square-banner.webp',
    alt: 'Visit Us In Store',
    link: '/store',
  },
  valentines: [
    {
      image: '/images/valentine-for-her.webp',
      alt: 'Valentine Gifts For Her',
      link: '/gifts-for-her',
    },
    {
      image: '/images/valentine-for-him.webp',
      alt: 'Valentine Gifts For Him',
      link: '/gifts-for-him',
    }
  ]
};

export default function OtherBanner() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* First Column - Store Banner */}
        <div className="w-full lg:max-w-[462px] flex">
          <Link href={banners.store.link} className="w-full">
            <div className="relative cursor-pointer group flex flex-col h-full">
              <Image
                src={banners.store.image}
                alt={banners.store.alt}
                width={462}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </Link>
        </div>

        {/* Second Column - Valentine's Banners */}
        <div className="flex-1 flex flex-col gap-4 h-full">
          {banners.valentines.map((banner, index) => (
            <Link key={index} href={banner.link} className="w-full flex-1">
              <div className="relative cursor-pointer group flex h-full">
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}