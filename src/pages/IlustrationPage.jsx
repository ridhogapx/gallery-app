import Transition from "../components/Transition"
import Ilustration from "../components/Ilustration"

const IlustrationPage = () => {
    return (
        <Transition children={
            <div className="pt-5">
                <Ilustration />
            </div>
        }/>
    )
}

export default IlustrationPage