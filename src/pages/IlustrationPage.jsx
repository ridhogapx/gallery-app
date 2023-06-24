import Transition from "../components/Effect/Transition"
import Ilustration from "../components/Common/Ilustration"

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