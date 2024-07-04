import  '../styles/style-react.css';
type BotonProps = {
  children: string,
  className: string
  onClick?: ()=> void
}

export default function Boton({ children,  className, onClick }:BotonProps ) {
  
  return (
    <>
      <div className="div-elemento-a">
        <a onClick={onClick} className={className}>
          {children}
        </a>
      </div>
    </>
  );
}
