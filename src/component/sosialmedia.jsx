import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    icon: <FaInstagram className="text-pink-500" />,
    url: "https://instagram.com/",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF className="text-blue-600" />,
    url: "https://facebook.com/",
  },
  {
    name: "TikTok",
    icon: <FaTiktok className="text-black" />,
    url: "https://tiktok.com/",
  },
  {
    name: "YouTube",
    icon: <FaYoutube className="text-red-600" />,
    url: "https://youtube.com/",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Temukan Kami di Media Sosial
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
