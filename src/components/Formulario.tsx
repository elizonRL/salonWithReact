import { useForm } from "react-form-ease";
import "../styles/form.css";

export default function Formulario() {
  const {formData, updateForm}= useForm({
    data:{
      name: '', 
      email:'',
      date: '',
      hour: ''
    }
  })
  return (
    <>
      <form  method="post"  className="form">
        <div className="form-input">
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" onChange={(e)=>updateForm({name: e.target.value}) }/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="email" onChange={(e)=>updateForm({email: e.target.value}) } />
          </div>
        </div>
        <div className="form-input">
          <div>
            <label htmlFor="">Fecha</label>
            <input type="date" name="date" onChange={(e) => updateForm({date: e.target.value })}/>
          </div>
          <div>
            <label htmlFor="">Hour</label>
            <input type="time" min={"9:00"} max={"20:00"} required name="hour" onChange={(e)=> updateForm({hour: e.target.value})} />
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      <p>{formData.date}</p>
      <p>{formData.hour}</p>
    </>
  );
}
