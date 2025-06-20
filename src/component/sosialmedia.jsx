import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500" />,
    url: "https://www.instagram.com/pt_shabi.lombok.bersaudara/",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF className="text-blue-600" />,
    url: "https://www.facebook.com/profile.php?id=61556022470859",
  },
  {
    name: "TikTok",
    icon: <FaTiktok className="text-black" />,
    url: "https://www.tiktok.com/@shabigroup",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="text-green-500" />,
    url: "https://wa.me/+6283825948215", // Ganti 'yourphonenumber' dengan nomor kamu (tanpa + dan spasi)
  },
];

const SocialMedia = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Find Us on Social Media
      </h2>
      <div className="flex gap-5 flex-wrap">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow px-4 py-2 rounded-xl"
          >
            <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
              {item.icon}
            </div>
            <span className="text-gray-700 font-medium group-hover:text-black">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
