import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-customGrayComponents flex justify-around items-center py-4 rounded-xl p-8">
      <h1 className="text-lg font-bold">Deyvid Kasteh</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" >
              Página Inicial
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-700">
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
    </header>
  );
};

export default Header;
