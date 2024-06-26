import "./App.css";
import Sections from "./components/Sections";
import Boton from "./components/Boton";
import Services from "./components/Servises";

function App() {
  return (
    <>
      <main>
        <Sections>
          <aside className="hero">
            <div>
              <h1>Bella Beauty Salon</h1>
              <div>
                <p>
                  Discover the ultimate pampering experience at our premier
                  beauty salon. Indulge in a wide range of luxurious services
                  tailored to make you feel beautiful and confident.
                </p>
              </div>
              <div className="butones">
                <Boton name="Book" className={"buton"}>
                  Book now
                </Boton>
                <Boton name="servise" className={"buton-white"}>
                  Servises
                </Boton>
              </div>
            </div>
          </aside>
          <aside className="galery">
            <img
              src="/img/beauty-salon-front-state.webp"
              alt="Front of salon"
              className="top-img"
            />
            <img src="/img/beauty-salon-black.webp" alt="Salon black" />
            <img src="/img/beauty-salon-pink.webp" alt="Salon pink" />
          </aside>
        </Sections>
        <Sections bgColor='bg-color-gray'>
          <aside>
            <div className="header">
              <h2>Indulge in Luxury</h2>
              <p>
                Explore our wide range of premium beauty services designed to
                help you look and feel your best.
              </p>
            </div>
            <div className='body-seccion'>
              <div className='services-details'>
                <Services />
              </div>
              <div className='imagen-corte'>
                <img
                  src="/img/salon-corte.webp"
                  alt="salonera haciendo corte"
                />
              </div>
            </div>
          </aside>
        </Sections>
      </main>
    </>
  );
}
export default App;
