import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const phoneNumber = "6283825948215";
const message = "Halo, saya ingin bertanya seputaran dengan proses pendaftaran!";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-yellow-600 text-white py-5">
        <div className="container mx-auto flex flex-col lg:space-y-0 lg:flex-row justify-between items-start lg:items-center">
          {/* Contact Person */}
          <div className="mb-6 lg:mb-0 w-full lg:w-1/4 ">
            <h4 className="text-lg font-semibold font-primary mb-3">Contact Person</h4>
            <p className="text-sm font-secondary">Phone: +62 838-2594-8215</p>
            <p className="text-sm font-secondary">Email: shabi.lombok.bersaudara@gmail.com</p>
            <p className="text-sm font-secondary">WhatsApp: +62 838-2594-8215</p>
          </div>

          {/* Address */}
          <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Alamat</h4>
            <p className="text-sm font-secondary">
              7FG8+X2H, Rensing, Kec. Sakra Bar., Kabupaten Lombok Timur, Nusa Tenggara Bar. 83671
            </p>
          </div>

          {/* Map */}
          <div className="w-full lg:w-1/4">
            <h4 className="text-lg font-semibold font-primary mb-3">Lokasi</h4>
            <div className="rounded-lg overflow-hidden shadow-md aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.6730588254286!2d116.4651175!3d-8.7225626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc53c92d4de2af%3A0xace27d71adc99f05!2sPT.%20SHABI%20LOMBOK%20BERSAUDARA!5e0!3m2!1sid!2sid!4v1741245922012!5m2!1sid!2sid"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white mt-8 pt-4 text-center">
          <p className="text-sm font-secondary">
            &copy; {new Date().getFullYear()} PT.SHabi Lombok Bersaudara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
