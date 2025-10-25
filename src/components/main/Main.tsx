export const Main = () => {
  return (
    <>
      <main className="grid container mt-10">
        <section id="featured" className="grid grid-flow-col gap-4">
          <figure className="card">
            <img src="../assets/images/Image 01.png" alt="" />

            <figcaption>
              <span className="content-tag">Robótica</span>
              <h2 className="text-xl">
                Robôs domésticos começam a ser adotados para tarefas diárias,
                prometendo mais conforto e eficiência nas residências.
              </h2>
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-4">
            <figure className="card">
              <img src="../assets/images/Image 02.png" alt="" />

              <figcaption>
                <span className="content-tag">Hologramas</span>
                <h2 className="text-lg">
                  Novo Smartphone Projetor 3D chega ao mercado, transformando a
                  forma como vemos nossas telas!
                </h2>
              </figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/images/Image 03.png" alt="" />

              <figcaption>
                <span className="content-tag">Internet</span>
                <h2 className="text-lg">
                  Tecnologia 6G chega às metrópoles brasileiras, prometendo
                  revolucionar a forma como vivemos e nos comunicamos.
                </h2>
              </figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/images/Image 04.png" alt="" />

              <figcaption>
                <span className="content-tag">Vestíveis</span>
                <h2 className="text-lg">
                  Empresa lança relógio inteligente capaz de monitorar a saúde
                  mental, oferecendo insights valiosos para o bem-estar pessoal.
                </h2>
              </figcaption>
            </figure>
            <figure className="card">
              <img src="../assets/images/Image 05.png" alt="" />

              <figcaption>
                <span className="content-tag">Realidade Virtual</span>
                <h2 className="text-lg">
                  Escolas adotam a tecnologia VR para proporcionar experiências
                  imersivas, transformando a aprendizagem tradicional.
                </h2>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="weekly">
          <header className="grid grid-flow-col">
            <h3>Mais lidas da semana</h3>
            <a href="#" className="grid grid-flow-col">
              <strong>Ver tudo</strong>
              <span></span>
            </a>
          </header>

          <div className="grid gap-4">
            <figure>
              <span className="content-tag">Veículos</span>
              <img src="../assets/images/Image 06.png" alt="" />
              <p>
                Protótipo de veículo voador é apresentado, marcando o início da
                era dos transportes aéreos pessoais.
              </p>
            </figure>
            <figure className="grid gap-4">
              <span className="content-tag">Hologramas</span>
              <img src="../assets/images/Image 07.png" alt="" />
              <p>
                Plataforma de videoconferência apresenta nova função de
                hologramas, tornando as chamadas virtuais mais realistas e
                envolventes.
              </p>
            </figure>
            <figure className="grid gap-4">
              <span className="content-tag">Realidade virtual</span>
              <img src="../assets/images/Image 08.png" alt="" />
              <p>
                Nova geração de consoles de videogame é lançada, trazendo
                gráficos ultra-realistas e experiências de jogo totalmente
                envolventes.
              </p>
            </figure>
            <figure className="grid gap-4">
              <span className="content-tag">Internet</span>
              <img src="../assets/images/Image 09.png" alt="" />
              <p>
                Projeto busca oferecer internet de alta velocidade em áreas
                remotas através de satélites.
              </p>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
};
