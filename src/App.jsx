import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-black text-white h-screen overflow-y-scroll flex flex-col">
      {/* Navbar */}
      <nav className="bg-black text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            GriseeKost
          </a>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="https://www.google.com" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/grissee.kost?igsh=MXE4M3R5MHlqZ2M5dg=="
                className="hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-2 bg-gray-700 p-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-3/4 max-w-6xl bg-black">
          <div className="flex-1 p-8">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Grisee Kost
            </h1>
            <p className="font-bold text-lg mt-8 mb-8">Kost Murah Bagi Mahasiswa</p>
            <p className="text-lg mt-8 mb-8">
              Dapatkan pengalaman tinggal di kost yang dekat dengan Fakultas
              Kedokteran, sehingga memudahkan Anda untuk beraktivitas tanpa
              harus khawatir tentang jarak. Kami menyediakan suasana yang ramah
              dan nyaman, lengkap dengan fasilitas modern seperti kamar ber-AC,
              WiFi super cepat, dapur bersama, dan area belajar yang tenang.
              Semua ini ditawarkan dengan harga yang sangat terjangkau, cocok
              untuk mahasiswa yang ingin fokus belajar tanpa membebani biaya.
              Grisee Kost, solusi sempurna untuk kebutuhan Anda!
            </p>
            <button className="flex bg-lime-500 text-black font-bold px-6 py-3 rounded-full hover:bg-lime-600">
              Join
              <span className="ml-3 text-xl">&rarr;</span>
            </button>
          </div>
          <div className="flex-1 p-8">
            <img
              src="./assets/eks.jpg"
              alt="Grisee Kost"
              className="rounded-[30px] w-full shadow-lg"
            />
          </div>
          <iframe className="flex" src="https://v2-embednotion.com/13cd6e988eac809db648cacd58960b50" width="100%" height="400"></iframe>
        </div>
      </div>
      {/* Add a Footer or Extra Content */}
      <footer className="bg-black-900 text-center py-4">
        <p>© 2024 GriseeKost. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
