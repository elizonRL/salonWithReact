import  '../styles/style-react.css';
type BotonProps = {
  children: string,
  name: string,
  className: string
  onClick?: ()=> void
}

export default function Boton({ children, name, className, onClick }:BotonProps ) {
  const handelClick = () => {
    if(name === "Book"){
      onClick?.()
    }
  };
  return (
    <>
      <div className="div-elemento-a">
        <a onClick={handelClick} className={className}>
          {children}
        </a>
      </div>
    </>
  );
}
