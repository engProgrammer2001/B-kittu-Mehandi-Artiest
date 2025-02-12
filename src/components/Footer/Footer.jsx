import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#28666E] p-4 text-white py-8 relative">
        <div className="container mx-auto px-4">
          {/* First Row with 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <div>
                <img
                  src="/assets/logo/kittu.jpg"
                  alt="Logo"
                  className="h-52 w-52 rounded-lg"
                />
              </div>
              <p className="text-lg">
                We specialize in exquisite Mehandi artistry, ensuring customer
                satisfaction with every design we create.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Services</h3>
              <ul className="text-lg space-y-4">
                <li>Bridal Mehandi</li>
                <li>Party Mehandi</li>
                <li>Festive Mehandi</li>
                <li>Corporate Event Mehandi</li>
                <li>Minimalist Mehandi</li>
                <li>Traditional Mehandi</li>
                <li>Baby Shower Mehandi</li>
                <li>Customized Mehandi</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-lg space-y-4">
                <li>
                  <a href="/" className="hover:text-yellow-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-yellow-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-yellow-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:text-yellow-500">
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/plan-with-project"
                    className="hover:text-yellow-500"
                  >
                    Mehandi Plans
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-yellow-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    className="hover:text-yellow-500"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="text-lg pt-2">
                <span className="font-semibold text-yellow-500">Address :</span>
                &nbsp;Hastsal Vikash Nagar Delhi, 110066 India
              </p>
              <p className="text-lg pt-2">
                <span className="font-semibold text-yellow-500">Email :</span>
                &nbsp; info@paintingservice.com
              </p>
              <p className="text-lgp pt-2">
                <span className="font-semibold text-yellow-500">Phone :</span>
                &nbsp; +91 88004 57319
              </p>
              <p className="text-lg pt-2">
                <span className="font-semibold text-yellow-500">
                  Whatsapp :
                </span>
                &nbsp; +91 88004 57319
              </p>
            </div>
          </div>
          {/* Second Row for Copyright */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} B-kittu Mehandi Art. All rights
              reserved. & Developed by
              <a target="_blank" rel="noreferrer" href="https://divywebb.com/">
                Divy Webb Creation
              </a>
            </p>
          </div>
        </div>
        {/* Floating Icons */}
        <div className="fixed bottom-4 left-4">
          <a
            href="tel:8800457319"
            className="text-blue-700 p-3 rounded-full transition-transform hover:scale-110"
            aria-label="Call Us"
          >
            <FaPhone size={60} />
          </a>
        </div>
        <div className="fixed bottom-4 right-4">
          <a
            href="https://wa.link/eina77"
            className="text-green-500 p-3 rounded-full transition-transform hover:scale-110"
            aria-label="WhatsApp Us"
          >
            <FaWhatsapp size={60} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
