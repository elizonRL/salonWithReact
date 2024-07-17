import { useForm } from "react-form-ease";
import "../styles/form.css";
import Boton from "./Boton";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

type Props = {
  dataFormulario: (formData: {
    name: string;
    email: string;
    date: string;
    hour: string;
    service: string;
  }) => void;
};

export default function Formulario({ dataFormulario }: Props) {
  const { formData, updateForm, validateForm, errors } = useForm({
    data: {
      name: "",
      email: "",
      date: "",
      hour: "",
      service: "",
    },
    validations: {
      name: (value) => {
        if (!value) return "Please enter your name";
      },
      email: (value) => {
        if (!value) return "the Email is Required";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
          return "Please enter a valid email";
      },
      date: (value) => {
        if (!value) return "Please enter the date";
      },
      hour: (value) => {
        if (!value) return "Enter you arrival time";
         if (!/^([01]?[0-9]|1[0-9]):[0-3][0-0]$/.test(value))
          return "choose other hour, from 9:00 to 19:00 thanks ";
      },
      service: (value) => {
        if (!value) return "Choose your service";
      },
    },
  });

  function handelClick() {
    if (!validateForm()) return;

    const salvingData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataFormulario(formData));
      }, 3000);
    });

    toast.promise(salvingData, {
      pending: "Sending you appointment",
      success: "You appointment has been send succesfuly",
      error: "something has gone wrong, try again",
    });
    console.log(typeof errors);
  }

  return (
    <>
      <form method="post" className="form">
        <div className="form-group">
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              onChange={(e) => updateForm({ name: e.target.value })}
            />
            {errors?.name && (
              <p className="invalid-feedback">❌ {errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => updateForm({ email: e.target.value })}
            />
            {errors?.email && (
              <p className="invalid-feedback">❌ {errors.email}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="service">Choose your servise:</label>
          <select
            name="service"
            defaultValue=""
            onChange={(e) => updateForm({ service: e.target.value })}
          >
            <option value="">Choose one servise</option>
            <option value="haircut">Hair cut</option>
            <option value="nails">Nails</option>
            <option value="skincare">Skin Care</option>
            <option value="bodytreatments">Body Treatments</option>
          </select>
          {errors?.service && (
            <p className="invalid-feedback">❌ {errors.service}</p>
          )}
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="date">Fecha</label>
            <input
              type="date"
              name="date"
              onChange={(e) => updateForm({ date: e.target.value })}
            />
            {errors?.date && (
              <p className="invalid-feedback">❌ {errors.date}</p>
            )}
          </div>
          <div>
            <label htmlFor="hour">Hour</label>
            <input
              type="time"
              required
              name="hour"
              onChange={(e) => updateForm({ hour: e.target.value })}
            />
            {errors?.hour && (
              <p className="invalid-feedback">❌ {errors.hour}</p>
            )}
          </div>
        </div>
        <Boton className={"buton"} onClick={handelClick}>
          Book service
        </Boton>
      </form>
    </>
  );
}
