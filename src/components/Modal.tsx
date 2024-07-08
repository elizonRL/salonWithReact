import { MouseEvent, ReactNode } from "react";
import "../styles/modal.css";
/* import Formulario from "./Formulario"; */
type Props = {
  children?:ReactNode
  onClick: () => void;
};
export default function Modal({onClick, children}:Props) {
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
          <div className="header-modal">
            <h3>Book Your services</h3>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
