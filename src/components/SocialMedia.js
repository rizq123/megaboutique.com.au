import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPencilAlt } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <div className="container mx-auto py-6 text-center text-gray-700">
      <div className="flex flex-wrap justify-center space-x-6 text-sm px-2">
        <Link href="https://www.megaboutique.com.au/colour-image-disclaimer" className="hover:underline">Colour / Image Disclaimer</Link>
        <Link href="https://www.megaboutique.com.au/about_us" className="hover:underline">About Us</Link>
        <Link href="https://www.megaboutique.com.au/delivery" className="hover:underline">Delivery Information</Link>
        <Link href="https://www.megaboutique.com.au/privacy" className="hover:underline">Privacy Policy</Link>
        <Link href="https://www.megaboutique.com.au/terms" className="hover:underline">Terms & Conditions</Link>
        <Link href="https://www.megaboutique.com.au/return-policy" className="hover:underline">Return Policy</Link>
        <Link href="/sale" className="hover:underline">Sale</Link>
      </div>
      
      <div className="mt-4 flex flex-wrap justify-center space-x-4">
        <Link href="https://www.megaboutique.com.au/login" className="hover:underline">Login</Link>
        <span>|</span>
        <Link href="https://www.megaboutique.com.au/register" className="hover:underline">Register</Link>
      </div>

      <p className="mt-4">Store Open Hours: Mon - Fri 9.30am - 5.30pm Sat 9.30am - 4pm Sun Closed</p>

      <div className="mt-6 flex flex-wrap justify-center space-x-4 text-gray-500 text-2xl">
        <Link href="https://www.facebook.com/MegaBoutiqueAu" target="_blank" className="hover:text-gray-800">
          <FaFacebookF />
        </Link>
        <Link href="https://www.instagram.com/megaboutique.au/" target="_blank" className="hover:text-gray-800">
          <FaInstagram />
        </Link>
        <Link href="https://twitter.com/megaboutiqueau" target="_blank" className="hover:text-gray-800">
          <FaTwitter />
        </Link>
        <Link href="https://au.linkedin.com/company/megaboutique" target="_blank" className="hover:text-gray-800">
          <FaLinkedinIn />
        </Link>
        <Link href="https://www.megaboutique.com.au/blogs" target="_blank" className="hover:text-gray-800">
          <FaPencilAlt />
        </Link>
      </div>
    </div>
  );
}
