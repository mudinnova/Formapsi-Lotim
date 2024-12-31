import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-yellow-600 text-white py-10 px-4">
        <div className="container mx-auto flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between items-start lg:items-center">
          {/* Contact Person */}
          <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Contact Person</h4>
            <p className="text-sm">Phone: +62 819-0620-6738</p>
            <p className="text-sm">Email: shabi.lombok.bersaudara@gmail.com</p>
            <p className="text-sm">WhatsApp: +62 819-0620-6738</p>
          </div>

          {/* Address */}
          <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Alamat</h4>
            <p className="text-sm">
              Pematung, Sakra Barat, Lombok Timur, Indonesia, Sakra, Indonesia, West Nusa Tenggara
            </p>
          </div>

          {/* Social Media */}
          <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Media Sosial</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61556022470859"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://mail.google.com/mail/u/4/#inbox"
                target="Gmail"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Lokasi</h4>
            <div className="rounded-lg overflow-hidden shadow-md aspect-video">
              {/* Replaced iframe with the new one */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d492.92987893686654!2d116.47190881427215!3d-8.744695946807676!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1735634703840!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
