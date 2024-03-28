import React from "react";
import logo from "public/deyvidKaseth.jpg";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-customGrayComponents flex justify-around items-center py-6 rounded-xl">
      <div>
        < src={logo} alt="Logo" />
        <h1 className="text-lg font-bold">Deyvid Kasteh</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Página Inicial</a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 hover:bg-blue-500"
            >
              Sobre
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