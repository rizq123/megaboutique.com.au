import Head from 'next/head';
import Banner from "../components/Banner";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Nav from "../components/Nav";
import ShopCategoryGallery from "@/components/ShopCategoryGallery";
import ImageSwiper from '../components/ImageSwiper';
import OtherBanner from "@/components/OtherBanner";
import BrandSlider from "@/components/BrandSlider";
import BrandCards from "@/components/BrandCards";
import TextSection from "@/components/TextSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import PaymentMethod from "@/components/paymentMethod";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";
import TextSliderMobile from "@/components/TextSliderMobile";

export default function Home() {
  const images = [
    '/slider/slider-1.webp',
    '/slider/slider-2.webp',
    '/slider/slider-3.webp',
  ];

  return (
    <div>
      <Head>
        <meta name="description" content="Mega Boutique offers a wide range of premium housewares and kitchen supplies. Shop online for quality cookware, kitchenware, and home accessories." />
      </Head>
      <div className="sticky top-0 z-50 hidden md:block">
        <Banner />
        <Header />
        <Nav />
      </div>
      <div className="sticky top-0 z-50 md:hidden">
        <HeaderMobile />
      </div>
      <TextSliderMobile />
      <ImageSwiper images={images} />
      <ShopCategoryGallery />
      <OtherBanner />
      <BrandSlider />
      <BrandCards />
      <TextSection />
      <NewsletterSignup />
      <PaymentMethod />
      <SocialMedia />
      <Footer />
    </div>
  );
}
