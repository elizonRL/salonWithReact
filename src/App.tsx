
import './App.css'
import Sections from './components/Sections'
import Boton from './components/Boton'

function App() {
 

  return (
    <>
    <main>
      <Sections>
      <aside className='hero'>
        <div>
        <h1>Bella Beauty Salon</h1>
          <div>
            <p>
              Discover the ultimate pampering experience at our premier beauty
              salon. Indulge in a wide range of luxurious services tailored to
              make you feel beautiful and confident.
            </p>
          </div>
          <div className="butones" >
            <Boton name="Book" className={"buton"} >
              Book now
            </Boton>
            <Boton name="servise" className={"buton-white"} >
              Servises
            </Boton>
          </div>
        </div>
      </aside>
      </Sections>
    </main>
    </>
  )
}

export default App
