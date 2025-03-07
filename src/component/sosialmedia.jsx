import React from "react";

const socialMediaLinks = [
  { name: "Facebook", img: "/icons/FB.png", link: "https://www.facebook.com/profile.php?id=61556022470859" },
  { name: "Instagram", img: "/icons/IG.jpg", link: "https://www.instagram.com/pt_shabi.lombok.bersaudara?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { name: "WhatsApp", img: "/icons/WA.jpeg", link: "https://wa.me/6283825948215" },
];
 
const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center my-10">
      {/* Judul */}
      <h2 className="text-xl font-bold text-yellow-500 mb-4">MEDIA SOSIAL</h2>

      {/* Grid Icon Media Sosial */}
      <div className="flex gap-4">
        {socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 md:w-24 md:h-24 border-2 border-gray-300 rounded-lg flex justify-center items-center hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <img src={social.img} alt={social.name} className="w-12 h-12" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
