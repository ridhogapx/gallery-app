import Transition from "../components/Transition"
import Personal from "../components/Personal"

const PersonalPage = (props) => {
    const { visibility } = props

    return (
        <Transition children={
                <div className="pt-5">
                   {visibility &&
                     <Personal />
                   }
                </div>
        }/>
    )
}

export default PersonalPage