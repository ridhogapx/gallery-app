import Transition from "../components/Effect/Transition"
import Concept from "../components/Common/Concept"

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