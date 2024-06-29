import "./App.css";
import Sections from "./components/Sections";
import Boton from "./components/Boton";
import Services from "./components/Servises";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isTrue, setIstrue] = useState(true)

 const changeTrue = ()=>{
  setIstrue(!isTrue)
 }
  return (
    <>
      <main>
        {isTrue ? <Modal/>: " "}
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
                <Boton name="Book" className={"buton"} onClick={changeTrue}>
                  Book now
                </Boton>
                <Boton name="servise" className={"buton-white"}  onClick={changeTrue}>
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
        <Sections bgColor="bg-color-gray">
          <aside>
            <div className="header">
              <h2>Indulge in Luxury</h2>
              <p>
                Explore our wide range of premium beauty services designed to
                help you look and feel your best.
              </p>
            </div>
            <div className="body-seccion">
              <div className="services-details">
                <Services />
              </div>
              <div className="imagen-corte">
                <img
                  src="/img/salon-corte.webp"
                  alt="salonera haciendo corte"
                />
              </div>
            </div>
          </aside>
        </Sections>
        <Sections>
          <aside className="aside-about">
            <h2>Elevating Beauty, Empowering Confidence</h2>
            <p>
              At Bella Beauty Salon, we are passionate about helping our clients
              look and feel their absolute best. Our team of skilled
              professionals is dedicated to providing personalized, high-quality
              services in a luxurious and welcoming environment.
            </p>
            <div className="butones">
              <Boton name="Book" className={"buton"} >
                Book an appointment
              </Boton>
              <Boton name="servise" className={"buton-white"}>
                Learn more
              </Boton>
            </div>
          </aside>
          <aside>
            <div className="imagen-corte">
              <img src="/img/salon-corte.webp" alt="salonera haciendo corte" />
            </div>
          </aside>
        </Sections>
        <Sections>
          <aside>
            <div className="header">
            <h2>Schedule Your Appointment Today</h2>
            <p>
              Our team is here to assist you and answer any questions you may
              have. Get in touch to book your next appointment.
            </p>
            </div>
          </aside>
        </Sections>
      </main>
    </>
  );
}
export default App;
