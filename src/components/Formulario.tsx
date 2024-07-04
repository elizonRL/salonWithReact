import { useForm } from "react-form-ease";
import "../styles/form.css";
import Boton from "./Boton";


export default function Formulario() {
  const { formData, updateForm } = useForm({
    data: {
      name: "",
      email: "",
      date: "",
      hour: "",
      service: ""
    },
  });
  function handelClick(){
    console.log(formData)
  }
  return (
    <>
      <form method="post" className="form">
        <div className="form-input">
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              onChange={(e) => updateForm({ name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => updateForm({ email: e.target.value })}
            />
          </div>
        </div>
        <div className="form-input">
          <label htmlFor="">Choose your servise:</label>
          <select name="service" defaultValue="" onChange={e =>updateForm({service: e.target.value})}>
            <option value="">Choose one servise</option>
            <option value="haircut">Hair cut</option>
            <option value="nails">Nails</option>
            <option value="skincare">Skin Care</option>
            <option value="bodytreatments">Body Treatments</option>
          </select>
        </div>
        <div className="form-input">
          <div>
            <label htmlFor="">Fecha</label>
            <input
              type="date"
              name="date"
              onChange={(e) => updateForm({ date: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="">Hour</label>
            <input
              type="time"
              min={"9:00"}
              max={"20:00"}
              required
              name="hour"
              onChange={(e) => updateForm({ hour: e.target.value })}
            />
          </div>
        </div>
        <Boton className={"buton"} onClick={handelClick}>
          Book service
        </Boton>
      </form>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      <p>{formData.date}</p>
      <p>{formData.hour}</p>
      <p>{formData.service}</p>
    </>
  );
}
