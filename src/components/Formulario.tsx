import "../styles/form.css";
export default function Formulario() {
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        // Lógica para enviar el formulario
        const data = {
           name: e.currentTarget.nameR.value,
           email: e.currentTarget.email.value,
           date: e.currentTarget.date.value,
           hour: e.currentTarget.hour.value
        };
        console.log(data);
      }} className="form">
        <div className="form-input">
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="nameR" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="email" />
          </div>
        </div>
        <div className="form-input">
          <div>
            <label htmlFor="">Fecha</label>
            <input type="date" name="date" />
          </div>
          <div>
            <label htmlFor="">Hour</label>
            <input type="time" min={"9:00"} max={"20:00"} required name="hour" />
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
