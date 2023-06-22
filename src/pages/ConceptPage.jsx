import Transition from "../components/Transition"
import Concept from "../components/Concept"

const ConceptPage = (props) => {
    const { visibility } = props

    return (
       <Transition children={
        <div className="pt-5">
            {visibility &&
                 <Concept />
            }
        </div>
       }/>
       
    )
}

export default ConceptPage