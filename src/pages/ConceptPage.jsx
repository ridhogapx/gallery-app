import Transition from "../components/Transition"
import Concept from "../components/Concept"

const ConceptPage = () => {
    return (
       <Transition children={
        <div className="pt-5">
            <Concept />
        </div>
       }/>
       
    )
}

export default ConceptPage