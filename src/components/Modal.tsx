import { MouseEvent } from "react";
import "../styles/modal.css";
import Formulario from "./Formulario";
type Props = {
  onClick: () => void;
};
export default function Modal({onClick}:Props) {
  function handelModal(e: MouseEvent) {
    if(e.target === e.currentTarget){
      onClick();
    }
  }
  return (
    <>
      <div className="modal" onClick={handelModal}>
        <div className="modal-content">
          <samp className="close" onClick={handelModal}>&times;</samp>
          <div>
            <h3>Book Your services</h3>
            <p></p>
          </div>
          <div>
            <Formulario/>
          </div>
        </div>
      </div>
    </>
  );
}
