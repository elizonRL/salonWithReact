import '../styles/section.css'
import JsxElemente from '../interfaces/Jsx.interface'
function Sections({children}:JsxElemente){
    return(
        <>
        <section>
            {children}
        </section>
        </>
    )
}

export default Sections