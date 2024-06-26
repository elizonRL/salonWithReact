import '../styles/services.css'

export default function Services() {
  const services = [
    {
      name: "Hair Services",
      details: "Haircuts, coloring, styling, and more.",
      price: 45,
    },
    {
      name: "Nais Services",
      details: "Manicures, pedicures, and nail treatments.",
      price: 25,
    },
    {
      name: "Skin Care",
      details: "Facials, peels, and advanced treatments.",
      price: 65,
    },
    {
      name: "Body Treatments",
      details: "Massages, body wraps, and more.",
      price: 85,
    },
  ];
  return (
    <>
      <aside>
        <div className='body-details'>
          {services.map((services, index) => (
            <div className='section' key={index}>
              <h3>{services.name}</h3>
              <span>{services.details}</span>
              <div className='footer-details'>
                <small>From ${services.price}</small>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
