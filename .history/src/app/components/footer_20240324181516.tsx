import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <main className="bg-customGrayComponents flex justify-around items-center py-4 rounded-xl text-[20px]">
      <FaGithub />
      <FaInstagram />
      <FaLinkedin />
      <FaSquareXTwitter />
    </main>
  );
};

export default Footer;
