import "../styles/section.css";
import JsxElemente from "../interfaces/Jsx.interface";
const Sections = ({ children, bgColor }: JsxElemente) => {
  return (
    <>
      <section className={bgColor}>{children}</section>
    </>
  );
};

export default Sections;
