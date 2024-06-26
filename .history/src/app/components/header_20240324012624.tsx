import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <h1>Meu Site</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Página Inicial</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
