import React from "react";
import logo from "../../../public/deyvidKaseth.jpg";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-customGrayComponents flex justify-around items-center py-4 rounded-xl mb-4">
      <div className="flex items-center space-x-4">
        <Image src={logo} alt="Logo" className="rounded-full w-14 h-14" />
        <h1 className="text-lg font-bold">Deyvid Kasteh</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#" c>
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-500"
            >
              Sobre2
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Contatos
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-4">
        <p>Dia</p>
        <p>Noite</p>
      </div>
    </header>
  );
};

export default Header;
