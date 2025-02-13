import { FaLock } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left">
          <p>Unit 4/450 Princes Hwy, Noble Park VIC 3174 Australia | 03 8524 7870</p>
          <p className="mt-1">Mega Boutique © 2016 - 2025 | 
            <Link href="https://www.megaboutique.com.au/sitemap" className="hover:text-gray-400"> Sitemap</Link> | 
            <Link href="https://www.megaboutique.com.au/contact" className="hover:text-gray-400"> Contact</Link>
          </p>
        </div>
        <div className="flex items-center mt-4 md:mt-0 text-green-400">
          <FaLock className="mr-2" />
          <p className='text-white'>All Transactions Are Secured With SSL Encryption (HTTPS).</p>
        </div>
      </div>
    </footer>
  );
}
