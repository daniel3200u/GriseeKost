import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

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
      <div className="px-8 mt-12">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-3/4 max-w-6xl">
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
            <a href="http://wa.me/6282336049898" target="_blank" rel="noopener noreferrer">
            <button className="flex bg-lime-500 text-black font-bold px-6 py-3 rounded-full hover:bg-lime-600">
              Join
              <span className="ml-3 text-xl">&rarr;</span>
            </button>
            </a>
          </div>
          <div className="flex-1 p-8">
            <img
              src="./assets/eks.jpg"
              alt="Grisee Kost"
              className="rounded-[30px] w-full shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* The Room Section */}
      <div className="flex flex-col max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-white mb-8">THE ROOM</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://grissee-kost.my.canva.site/about/media/ccfacc249483aac8369534fd15786ac0.jpg"
              alt="Kamar"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-orange-600 mb-2">Kamar</h2>
              <p className="text-gray-700">Springbed, bantal & guling, AC, gantungan baju</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://grissee-kost.my.canva.site/about/media/ff52f4822eed440768491e4376f83198.jpg"
              alt="Set Belajar dan Pakaian"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-orange-600 mb-2">Set belajar dan pakaian</h2>
              <p className="text-gray-700">Lemari besi, meja belajar, kursi empuk</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://grissee-kost.my.canva.site/about/media/ccfacc249483aac8369534fd15786ac0.jpg"
              alt="Kamar Mandi"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-orange-600 mb-2">Kamar Mandi (dalam)</h2>
              <p className="text-gray-700">Shower, WC duduk, exhauster, gantungan baju</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16">
    <h1 className="text-3xl font-bold text-center mb-8">WELCOME TO YOUR HOME AWAY FROM HOME</h1>
    <p className="text-center mb-16">Whether you seek a quiet spot for focused study or a peaceful retreat from the demands of the day, this welcoming accommodation caters to your needs impeccably.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10">
      <div className="bg-white rounded-lg p-8 text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16   
 h-16 mx-auto mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2z" />
        </svg>
        <h3 className="text-2xl font-bold">1-2 menit jalan kaki dari FK UNAIR</h3>
      </div>
      <div className="bg-white rounded-lg p-8 text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16   
 h-16 mx-auto mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0-3m0-3v3" />
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold mx-16">Fasilitas lengkap</h3>
      </div>
      <div className="bg-white rounded-lg p-8 text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16   
 h-16 mx-auto mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m0 0v2.25m-6.364.386l-1.591 1.591M12 18h2.25m0-6.364l1.591 1.591M5 12h3m-1.654-4.695l-1.591-1.591M5 12l4.695 4.695 1.591-1.591" />
        </svg>
        <h3 className="text-2xl font-bold">Rooftop luas dengan view istimewa</h3>
      </div>
    </div>
  </div>
      {/* Iframe Section */}
      <div className="mt-12 px-20 flex justify-start">
        <iframe
          className="w-1/2 lg:w-2/3 rounded-lg shadow-lg"
          src="https://v2-embednotion.com/13cd6e988eac809db648cacd58960b50"
          width="100%"
          height="400"
        ></iframe>
      </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-4">
        <p>© 2024 GriseeKost. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
