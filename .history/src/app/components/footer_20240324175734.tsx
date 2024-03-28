import React from "react";
import { FaGithub } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <main className="bg-customGrayComponents flex justify-around items-center py-4 rounded-xl w-64 h-32">
      <FaGithub />
      Footer
    </main>
  );
};

export default Footer;