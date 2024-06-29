import  '../styles/style-react.css';
type BotonPros = {
  children: string,
  name: string,
  className: string
  onClick?: ()=> void
}

export default function Boton({ children, name, className }:BotonPros ) {
  const handelClick = () => {
    alert(" hello World" + name);
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
