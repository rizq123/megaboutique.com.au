"use client";
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/ImageSwiper.css'; // Import custom styles
import Image from 'next/image';

const brands = [
  { name: 'Wiltshire', image: 'https://img-cdn-02.megaboutique.com.au/logo/wiltshire-logo.jpg' },
  { name: 'Woodwick', image: 'https://img-cdn-02.megaboutique.com.au/logo/woodwick-logo.jpg' },
  { name: 'Wusthof', image: 'https://img-cdn-02.megaboutique.com.au/logo/wustof_logo.jpg' },
  { name: 'Zero', image: 'https://img-cdn-02.megaboutique.com.au/logo/zero_logo1.jpg' },
  { name: 'Zippo', image: 'https://img-cdn-02.megaboutique.com.au/logo/Zippo logo.jpg' },
  { name: 'Zoku', image: 'https://img-cdn-02.megaboutique.com.au/logo/zoku1.jpg' },
  { name: 'Zwilling', image: 'https://img-cdn-02.megaboutique.com.au/logo/zwilling-logo.jpg' },
  { name: 'Zyliss', image: 'https://img-cdn-02.megaboutique.com.au/logo/zyliss-logo.jpg' },
  { name: 'Adhoc', image: 'https://img-cdn-02.megaboutique.com.au/logo/adhoc_logo.jpg' },
  { name: 'Alessi', image: 'https://img-cdn-02.megaboutique.com.au/logo/alessi-logo.webp' },
  { name: 'Alzon', image: 'https://img-cdn-02.megaboutique.com.au/logo/alzon-logo.png' },
  { name: 'Amalfi', image: 'https://img-cdn-02.megaboutique.com.au/logo/Amalfi-Logo.jpg' },
  { name: 'Anchor Hocking', image: 'https://img-cdn-02.megaboutique.com.au/logo/Anchor Hocking.jpg' },
  { name: 'Anolon', image: 'https://img-cdn-02.megaboutique.com.au/logo/anolon-logo.webp' },
  { name: 'Ashdene', image: 'https://img-cdn-02.megaboutique.com.au/logo/ashdene-logo.jpg' },
  { name: 'Avanti', image: 'https://img-cdn-02.megaboutique.com.au/logo/avanti-logo.jpg' },
  { name: 'BakeMaster', image: 'https://img-cdn-02.megaboutique.com.au/logo/BakeMaster_Logo.jpg' },
  { name: 'Baker\'s Secret', image: 'https://img-cdn-02.megaboutique.com.au/logo/baker\'s secret.png' },
  { name: 'Ballarini', image: 'https://img-cdn-02.megaboutique.com.au/logo/ballarini-logo.jpg' },
  { name: 'Bambury', image: 'https://img-cdn-02.megaboutique.com.au/logo/bambury.png' },
  { name: 'Berghoff', image: 'https://img-cdn-02.megaboutique.com.au/logo/berghoff-logo.png' },
  { name: 'Blacklock', image: 'https://img-cdn-02.megaboutique.com.au/logo/blacklock_logo2.jpg' },
  { name: 'Borner', image: 'https://img-cdn-02.megaboutique.com.au/logo/Borner Logo.jpg' },
  { name: 'Boutique', image: 'https://img-cdn-02.megaboutique.com.au/logo/boutique-logo.jpg' },
  { name: 'Brabantia', image: 'https://img-cdn-02.megaboutique.com.au/logo/brabantia-logo.jpg' },
  { name: 'Bundanoon', image: 'https://img-cdn-02.megaboutique.com.au/logo/Bundanoon_logo2.jpg' },
  { name: 'Chasseur', image: 'https://img-cdn-02.megaboutique.com.au/logo/chasseur-logo.jpg' },
  { name: 'Chef\'s Choice', image: 'https://img-cdn-02.megaboutique.com.au/logo/chefs-choice-logo-vector.jpg' },
  { name: 'Cheftech', image: 'https://img-cdn-02.megaboutique.com.au/logo/cheftech_logo.png' },
  { name: 'Cinnamon', image: 'https://img-cdn-02.megaboutique.com.au/logo/cinnamon-logo.jpg' },
  { name: 'Circulon', image: 'https://img-cdn-02.megaboutique.com.au/logo/Circulon-logo.png' },
  { name: 'Cole & Mason', image: 'https://img-cdn-02.megaboutique.com.au/logo/cole-mason-logo.jpg' },
  { name: 'Contigo', image: 'https://img-cdn-02.megaboutique.com.au/logo/contigo-logo.jpg' },
  { name: 'Cristal D\'Arques', image: 'https://img-cdn-02.megaboutique.com.au/logo/cristal_darques_logo_25.jpg' },
  { name: 'Cuisinart', image: 'https://img-cdn-02.megaboutique.com.au/logo/cuisinart.png' },
  { name: 'Cuisipro', image: 'https://img-cdn-02.megaboutique.com.au/logo/Cuisipro logo.jpg' },
  { name: 'Davinci', image: 'https://img-cdn-02.megaboutique.com.au/logo/Davinci-Logo.jpg' },
  { name: 'Davis & Waddell', image: 'https://img-cdn-02.megaboutique.com.au/logo/daviswaddelllogo.jpg' },
  { name: 'Dexter-Russell', image: 'https://img-cdn-02.megaboutique.com.au/logo/Dexter-Russell Logo.jpg' },
  { name: 'Duralex', image: 'https://img-cdn-02.megaboutique.com.au/logo/duralex-logo.jpeg' },
  { name: 'E-cloth', image: 'https://img-cdn-02.megaboutique.com.au/logo/E-cloth Logo.jpg' },
  { name: 'Eco Ladelle', image: 'https://img-cdn-02.megaboutique.com.au/logo/eco-ladelle.webp' },
  { name: 'Ecology', image: 'https://img-cdn-02.megaboutique.com.au/logo/Ecology_Updated_logo.jpg' },
  { name: 'Ecoya', image: 'https://img-cdn-02.megaboutique.com.au/logo/ecoya-logo.png' },
  { name: 'Edge Master', image: 'https://img-cdn-02.megaboutique.com.au/logo/Edge Master Logo.jpg' },
  { name: 'Emile Henry', image: 'https://img-cdn-02.megaboutique.com.au/logo/emile-henry-logo.jpg' },
  { name: 'Emporium', image: 'https://img-cdn-02.megaboutique.com.au/logo/logo-emporium.jpg' },
  { name: 'Epicurean', image: 'https://img-cdn-02.megaboutique.com.au/logo/Epicurean Logo.jpg' },
  { name: 'Esstelle', image: 'https://img-cdn-02.megaboutique.com.au/logo/esstelle_logo.jpg' },
  { name: 'Euroscrubby', image: 'https://img-cdn-02.megaboutique.com.au/logo/euroscrubby-logo.jpg' },
  { name: 'Full Circle', image: 'https://img-cdn-02.megaboutique.com.au/logo/logo_full_circle_2.jpg' },
  { name: 'Furi', image: 'https://img-cdn-02.megaboutique.com.au/logo/furi_logo.jpg' },
  { name: 'Gefu', image: 'https://img-cdn-02.megaboutique.com.au/logo/Gefu Logo.jpg' },
  { name: 'Glasslock', image: 'https://img-cdn-02.megaboutique.com.au/logo/Glasslock Logo.jpg' },
  { name: 'Global', image: 'https://img-cdn-02.megaboutique.com.au/logo/global.jpg' },
  { name: 'Jellycat', image: 'https://img-cdn-02.megaboutique.com.au/logo/jellycatlogo.jpg' },
  { name: 'Joseph Joseph', image: 'https://img-cdn-02.megaboutique.com.au/logo/Josephjoseph.png' },
  { name: 'Kamati', image: 'https://img-cdn-02.megaboutique.com.au/logo/kamati_logo.png' },
  { name: 'Kas', image: 'https://img-cdn-02.megaboutique.com.au/logo/kas-logo.jpg' },
  { name: 'Kasumi', image: 'https://img-cdn-02.megaboutique.com.au/logo/kasumi-logo1.jpg' },
  { name: 'Kilner', image: 'https://img-cdn-02.megaboutique.com.au/logo/kilner-logo_1.png' },
  { name: 'Krof', image: 'https://img-cdn-02.megaboutique.com.au/logo/krof-logo.png' },
  { name: 'Ladelle', image: 'https://img-cdn-02.megaboutique.com.au/logo/ladelle.webp' },
  { name: 'Linen House', image: 'https://img-cdn-02.megaboutique.com.au/logo/linenhouse.png' },
  { name: 'Lock & Lock', image: 'https://img-cdn-02.megaboutique.com.au/logo/locklock-logo.jpg' },
  { name: 'Lodge', image: 'https://img-cdn-02.megaboutique.com.au/logo/lodge-logo1.jpg' },
  { name: 'LM AUS', image: 'https://img-cdn-02.megaboutique.com.au/logo/LM AUS Logo.jpg' },
  { name: 'Luigi', image: 'https://img-cdn-02.megaboutique.com.au/logo/luigilogo1.jpg' },
  { name: 'MC', image: 'https://img-cdn-02.megaboutique.com.au/logo/MC Logo.jpg' },
  { name: 'Megaboutique', image: 'https://img-cdn-02.megaboutique.com.au/logo/Megaboutique-Orange.png' },
  { name: 'Mepal', image: 'https://img-cdn-02.megaboutique.com.au/logo/mepal-logo.png' },
  { name: 'Microplane', image: 'https://img-cdn-02.megaboutique.com.au/logo/microplane-logo.jpg' },
  { name: 'Mikasa', image: 'https://img-cdn-02.megaboutique.com.au/logo/mikasa-logo.jpg' },
  { name: 'Miyabi', image: 'https://img-cdn-02.megaboutique.com.au/logo/miyabi-logo.jpg' },
  { name: 'Mundial', image: 'https://img-cdn-02.megaboutique.com.au/logo/Mundial Logo.jpg' },
  { name: 'Nebo', image: 'https://img-cdn-02.megaboutique.com.au/logo/nebo_logo.jpg' },
  { name: 'Neoflam', image: 'https://img-cdn-02.megaboutique.com.au/logo/neoflam_logo.jpg' },
  { name: 'Nordic', image: 'https://img-cdn-02.megaboutique.com.au/logo/nordic-logo.png' },
  { name: 'Noritake', image: 'https://img-cdn-02.megaboutique.com.au/logo/noritake-logo.png' },
  { name: 'Oxo', image: 'https://img-cdn-02.megaboutique.com.au/logo/oxo_logo.png' }
];

export default function BrandSlider() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-navigation-size": "9px",
        }}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={8}
        navigation={true}
        loop
        initialSlide={1}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 8 },
        }}
        className="flex items-center"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Image src={brand.image} alt={brand.name} width={150} height={80} className="object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

