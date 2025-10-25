export const Header = () => {
  return (
    <header className="container mx-auto">
      <nav id="primary" className="grid grid-flow-col">
        <div className="">
          <img src="../assets/icons/List.svg" alt="ícone de menu" />
          <strong>Menu</strong>
        </div>

        <div>
          <img src="../assets/Logo.png" alt="Portal de Notícias logo" />
        </div>

        <div className="">
          <strong>Buscar</strong>
          <img src="../assets/icons/MagnifyingGlass.svg" alt="ícone de busca" />
        </div>
      </nav>
      <nav id="secondary" className="grid grid-flow-col">
        <a href="#">Inteligência Artificial</a>
        <a href="#">Blockchain</a>
        <a href="#">Hologramas</a>
        <a href="#">Internet</a>
        <a href="#">Vestíveis</a>
        <a href="#">Realidade Aumentada</a>
        <a href="#">Realidade Virtual</a>
      </nav>
    </header>
  );
};
