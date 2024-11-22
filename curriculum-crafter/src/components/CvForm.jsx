import OneColumnBox from "../ui/OneColumnBox";
import TwoColumnBox from "../ui/TwoColumnBox";

const CvForm = () => {
    return (
        <div className="form-container">
            <TwoColumnBox title='Personal Details' />
            <OneColumnBox title='Personal Profile' label='Short paragraph at the top of your CV, in which you summarize your relevant experience and skills in 4 to 6 lines.' />
            <OneColumnBox title='Work Experience' label='Write down what you did and achieved in your daily tasks in 4 to 6 lines, followed by 2 or more key achievements where possible.' />
        </div>
    )
}

export default CvForm;