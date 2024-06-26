import '../styles/section.css'
import JsxElemente from '../interfaces/Jsx.interface'
const Sections:  React.FC<JsxElemente> = ({children, bgColor} )=>{
    return(
        <>
        <section className={bgColor}>
            {children}
        </section>
        </>
    )
}

export default Sections