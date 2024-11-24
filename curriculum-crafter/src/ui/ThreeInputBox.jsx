import OneColumnBox from "./OneColumnBox"
import TwoColumnBox from "./TwoColumnBox"

const ThreeInputBox = ({ title, description, type }) => {
    return (
        <>
            <OneColumnBox title={title} description={description}/>
            <TwoColumnBox inputType={type} />
        </>
    )
}

export default ThreeInputBox;