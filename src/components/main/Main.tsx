export const Main = () => {
  return (
    <>
      <main className="place-items-center lg:grid lg:container">
        <section
          id="featured"
          className="w-5/6 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
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
          <header className="xl:grid xl:grid-flow-col">
            <h3>Mais lidas da semana</h3>
            <a href="#" className="xl:grid xl:grid-flow-col">
              <strong>Ver tudo</strong>
              <span></span>
            </a>
          </header>

          <div className="xl:grid xl:gap-4 xl:place-content-center">
            <figure>
              <span className="content-tag">Veículos</span>
              <img src="../assets/images/Image 06.png" alt="" />
              <p>
                Protótipo de veículo voador é apresentado, marcando o início da
                era dos transportes aéreos pessoais.
              </p>
            </figure>
            <figure className="xl:grid xl:gap-4">
              <span className="content-tag">Hologramas</span>
              <img src="../assets/images/Image 07.png" alt="" />
              <p>
                Plataforma de videoconferência apresenta nova função de
                hologramas, tornando as chamadas virtuais mais realistas e
                envolventes.
              </p>
            </figure>
            <figure className="xl:grid xl:gap-4">
              <span className="content-tag">Realidade virtual</span>
              <img src="../assets/images/Image 08.png" alt="" />
              <p>
                Nova geração de consoles de videogame é lançada, trazendo
                gráficos ultra-realistas e experiências de jogo totalmente
                envolventes.
              </p>
            </figure>
            <figure className="xl:grid xl:gap-4">
              <span className="content-tag">Internet</span>
              <img src="../assets/images/Image 09.png" alt="" />
              <p>
                Projeto busca oferecer internet de alta velocidade em áreas
                remotas através de satélites.
              </p>
            </figure>
          </div>
        </section>

        <section id="ai">
          <header className="xl:grid xl:grid-flow-col">
            <h3>Destaques da Inteligência Artificial</h3>
            <a href="#" className="xl:grid xl:grid-flow-col">
              <strong>Ver tudo</strong>
              <span></span>
            </a>
          </header>

          <div className="xl:grid xl:gap-8">
            <article className="xl:grid xl:grid-flow-col xl:gap-4">
              <div>
                <span className="content-tag">Inteligência Artificial</span>
                <h3 className="text-xl">
                  Empresa surpreende o mundo ao anunciar um algoritmo capaz de
                  prever eventos futuros com alta precisão.
                </h3>
                <p className="text-sm- line-clamp-3">
                  Em um avanço surpreendente da inteligência artificial, uma
                  empresa anuncia o desenvolvimento de um algoritmo capaz de
                  prever eventos futuros com notável precisão. Descubra como
                  essa tecnologia está desafiando as fronteiras da previsão e
                  quais são as implicações para diversas áreas, desde finanças
                  até planejamento estratégico.
                </p>
              </div>
              <div>
                <img src="../assets/images/Image 10.png" alt="" />
              </div>
            </article>
            <article className="xl:grid xl:grid-flow-col xl:gap-4">
              <div>
                <span className="content-tag">Inteligência Artificial</span>
                <h3 className="text-xl">
                  Dispositivo portátil promete traduzir instantaneamente
                  diferentes idiomas, facilitando a comunicação global.
                </h3>
                <p className="text-sm- line-clamp-3">
                  Em um mundo cada vez mais conectado, a comunicação sem
                  fronteiras é essencial. Nesse contexto, um dispositivo
                  portátil surge como um verdadeiro herói linguístico,
                  prometendo quebrar as barreiras idiomáticas instantaneamente.
                  Imagine poder se comunicar fluentemente em qualquer lugar do
                  mundo, independentemente do idioma local. Este dispositivo não
                  é mais uma visão futurista, mas uma realidade impressionante
                  que está transformando a forma como nos conectamos
                  globalmente. Nesta reportagem, mergulharemos nas
                  funcionalidades deste dispositivo revolucionário e como ele
                  está moldando uma nova era de compreensão global.
                </p>
              </div>
              <div>
                <img src="../assets/images/Image 11.png" alt="" />
              </div>
            </article>
            <article className="xl:grid xl:grid-flow-col xl:gap-4">
              <div>
                <span className="content-tag">Inteligência Artificial</span>
                <h3 className="text-xl">
                  Criados para auxiliar idosos, robôs de companhia ganham
                  popularidade, oferecendo suporte emocional e físico aos
                  usuários.
                </h3>
                <p className="text-sm-line-clamp-3">
                  A tecnologia não só avança, mas também busca tornar a vida
                  mais significativa para todas as gerações. No cenário atual,
                  os robôs sociais, projetados especialmente para oferecer apoio
                  e companhia aos idosos, estão ganhando destaque. Mais do que
                  meros assistentes, esses robôs são programados para fornecer
                  suporte emocional e físico, preenchendo lacunas nas
                  necessidades de cuidado. Nesta matéria, exploraremos como
                  esses companheiros tecnológicos estão impactando positivamente
                  a qualidade de vida da terceira idade e proporcionando uma
                  nova perspectiva sobre o envelhecimento.
                </p>
              </div>
              <div>
                <img src="../assets/images/Image 12.png" alt="" />
              </div>
            </article>
            <article className="xl:grid xl:grid-flow-col xl:gap-4">
              <div>
                <span className="content-tag">Inteligência Artificial</span>
                <h3 className="text-xl">
                  Aplicativo utiliza inteligência artificial para ajudar
                  usuários a manterem o foco e aumentarem a produtividade no dia
                  a dia.
                </h3>
                <p className="text-sm- line-clamp-3">
                  No turbilhão da vida moderna, onde distrações são abundantes,
                  um aplicativo inovador surge como um aliado indispensável para
                  quem busca maior concentração e eficiência no cotidiano.
                  Utilizando avançados algoritmos de inteligência artificial,
                  este aplicativo promete mais do que simplesmente gerenciar
                  tarefas; ele está programado para compreender os padrões de
                  trabalho de cada usuário, oferecendo sugestões personalizadas
                  para otimizar o tempo e maximizar a produtividade. Nesta
                  matéria, exploraremos como essa ferramenta tecnológica está se
                  tornando a chave para manter o foco em um mundo cada vez mais
                  cheio de distrações, transformando a maneira como encaramos
                  nossas responsabilidades diárias.
                </p>
              </div>
              <div>
                <img src="../assets/images/Image 13.png" alt="" />
              </div>
            </article>
          </div>
        </section>

        <aside>
          <div id="ads">
            <img src="../assets/Ads.png" alt="" />
          </div>

          <section id="more">
            <header className="xl:grid xl:grid-flow-col">
              <h3>Viu isso aqui?</h3>
              <a href="#" className="xl:grid xl:grid-flow-col">
                <strong>Ver tudo</strong>
                <span></span>
              </a>
            </header>

            <div className="xl:grid xl:gap-8">
              <article className="xl:grid xl:grid-flow-col xl:gap-4">
                <div>
                  <img src="../assets/images/Image 14.png" alt="" />
                </div>
                <div>
                  <span className="content-tag">Software</span>
                  <h3 className="text-xl line-clamp-2">
                    Aplicativo de monitoramento ambiental ganha destaque,
                    incentivando práticas ecológicas e promovendo a
                    conscientização.
                  </h3>
                </div>
              </article>
              <article className="xl:grid xl:grid-flow-col xl:gap-4">
                <div>
                  <img src="../assets/images/Image 15.png" alt="" />
                </div>
                <div>
                  <span className="content-tag">Realidade Virtual</span>
                  <h3 className="text-xl line-clamp-2">
                    Óculos de realidade virtual com feedback tátil proporcionam
                    uma experiência sensorial completa, imergindo usuários em
                    ambientes digitais.
                  </h3>
                </div>
              </article>
              <article className="xl:grid xl:grid-flow-col xl:gap-4">
                <div>
                  <img src="../assets/images/Image 16.png" alt="" />
                </div>
                <div>
                  <span className="content-tag">Criptomoedas</span>
                  <h3 className="text-xl line-clamp-2">
                    Surge uma nova moeda digital baseada em tecnologias
                    sustentáveis, buscando minimizar o impacto ambiental
                    associado à mineração de criptomoedas.
                  </h3>
                </div>
              </article>
              <article className="xl:grid xl:grid-flow-col xl:gap-4">
                <div>
                  <img src="../assets/images/Image 17.png" alt="" />
                </div>
                <div>
                  <span className="content-tag">Drones</span>
                  <h3 className="text-xl line-clamp-2">
                    Empresas de e-commerce implementam frota de drones para
                    entregas rápidas, transformando o cenário do comércio
                    online.
                  </h3>
                </div>
              </article>
              <article className="xl:grid xl:grid-flow-col xl:gap-4">
                <div>
                  <img src="../assets/images/Image 18.png" alt="" />
                </div>
                <div>
                  <span className="content-tag">Impressão 3d</span>
                  <h3 className="text-xl line-clamp-2">
                    Tecnologia inovadora permite a impressão 3D de órgãos
                    humanos, revolucionando a medicina e a lista de espera por
                    transplantes.
                  </h3>
                </div>
              </article>
            </div>
          </section>
        </aside>
      </main>
    </>
  );
};
