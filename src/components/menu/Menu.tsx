"use client";

import { useState } from "react";

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <header className="w-11/12 mx-auto z-10">
      <nav
        id="primary"
        className="flex items-center justify-between xl:grid xl:grid-flow-col"
      >
        <button
          onClick={toggleMenu}
          aria-label={openMenu ? "Fechar menu" : "Abrir menu"}
          className="xl:hidden"
        >
          <img
            src="../assets/icons/List.svg"
            alt="ícone de menu"
            className="w-6 h-6"
          />
        </button>

        <div>
          <img
            src="../assets/Logo.png"
            alt="Portal de Notícias logo"
            className="w-52 lg:w-auto"
          />
        </div>

        <div>
          <img
            src="../assets/icons/MagnifyingGlass.svg"
            alt="ícone de busca"
            className="w-6 h-6"
          />
        </div>
      </nav>

      <nav
        id="secondary"
        className={`
          ${openMenu ? "flex" : "hidden"}
          absolute left-0 w-full h-full bg-white opacity-90 text-black 
          flex-col items-center justify-center gap-8 
          xl:static xl:flex xl:flex-row xl:bg-transparent xl:opacity-100 xl:h-auto xl:justify-center xl:text-white
        `}
      >
        <a href="#featured" onClick={toggleMenu}>
          Inteligência Artificial
        </a>
        <a href="#weekly" onClick={toggleMenu}>
          Mais lidas da semana
        </a>
        <a href="#ai" onClick={toggleMenu}>
          Destaques da Inteligência Artificial
        </a>
        <a href="#more" onClick={toggleMenu}>
          Viu isso aqui?
        </a>
      </nav>
    </header>
  );
};
