import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

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
