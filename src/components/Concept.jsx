import Section from "./Section";
import first from "../assets/concept/1.jpg"
import second from "../assets/concept/2.jpg"
import third from "../assets/concept/3.jpg"
import fourth from "../assets/concept/4.jpg"
import five from "../assets/concept/5.jpg"


const Concept = (props) => {
    const { visibility } = props
    const content = [
        {
            id: 1,
            src: first
        },
        {
            id: 2,
            src: second
        },
        {
             id: 3,
            src: third
        },
        {
             id: 4,
            src: fourth
        },
        {
             id: 5,
            src: five
        },
    ]
    return (
        <>
             {visibility && 
                <div className="pt-8">
                    <Section title="Concept" content={content} />
                </div>
            }
        </>
      
    )
}

export default Concept