import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter
} from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <main className="bg-customGrayComponents flex justify-around items-center py-4 rounded-xl w-64 h-32">
      <FaGithub />
      <FaInstagram />
      <FaLinkedin />
      <FaSquareXTwitter />
    </main>
  );
};

export default Footer;
