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
            <p className="text-sm">Phone: +62 812 3456 7890</p>
            <p className="text-sm">Email: contact@example.com</p>
            <p className="text-sm">WhatsApp: +62 813 9876 5432</p>
          </div>

          {/* Address */}
          <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Alamat</h4>
            <p className="text-sm">
              Jl. Merdeka No.123, Kota Mataram, NTB 83115, Indonesia
            </p>
          </div>

          {/* Social Media */}
          <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Media Sosial</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61556022470859  "
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0121784968437!2d116.1166644!3d-8.5839589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf12df5bfcd1%3A0x7a1c6c4b9c8c9ef1!2sUniversitas%20Mataram!5e0!3m2!1sen!2sid!4v1695746464693!5m2!1sen!2sid"
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
