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
            <div>
              <img src="../assets/images/Image 02.png" alt="" />
            </div>
            <div>
              <img src="../assets/images/Image 03.png" alt="" />
            </div>
            <div>
              <img src="../assets/images/Image 04.png" alt="" />
            </div>
            <div>
              <img src="../assets/images/Image 05.png" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
