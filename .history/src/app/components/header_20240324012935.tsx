import React from "react";

const Header: React.FC = () => {
  return (
    // <header>
    //   <h1>Meu Site</h1>
    //   <nav>
    //     <ul>
    //       <li>
    //         <a href="#">Página Inicial</a>
    //       </li>
    //       <li>
    //         <a href="#">Sobre</a>
    //       </li>
    //       <li>
    //         <a href="#">Contato</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    <header className="flex justify-between items-center py-4">
      <h1 className="text-lg font-bold">Meu Site</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-blue-500 hover:text-blue-700">
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
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
