import Transition from "../components/Transition"
import Ilustration from "../components/Ilustration"

const IlustrationPage = (props) => {
    const { visibility } = props

    return (
        <Transition children={
            <div className="pt-5">
                {visibility &&
                    <Ilustration />
                }
            </div>
        }/>
    )
}

export default IlustrationPage