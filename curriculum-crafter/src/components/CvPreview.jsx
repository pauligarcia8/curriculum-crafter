import { useContext } from "react";
import { FormContext } from "../store/user-form-context";


const CvPreview = () => {
const { cvFormData } = useContext(FormContext);
const { fullname, lastname } = cvFormData.personalInfo;

const name = fullname + ' ' + lastname;

    return (
        <div className="preview-container">
            <h1>{name}</h1>
        </div>
    )
}

export default CvPreview;