import { useContext } from "react";
import { FormContext } from "../store/user-form-context";
import TwoColumnBox from "../ui/TwoColumnBox";
import OneColumnBox from "../ui/OneColumnBox";

const personalDataInputConfig = [
  { name: "fullname", label: "Nombre/s", type: "text", column: 1 },
  { name: "lastname", label: "Apellido/s", type: "text", column: 1 },
  { name: "birthdate", label: "Date of Birth", type: "date", column: 1 },
  { name: "email", label: "Email", type: "email", column: 1 },
  { name: "phone", label: "Phone Number", type: "text", column: 2 },
  { name: "country", label: "Country", type: "text", column: 2 },
  { name: "city", label: "City", type: "text", column: 2 },
  { name: "address", label: "Address", type: "text", column: 2 },
];

const PersonalDetails = () => {
    const { handleFieldChange } = useContext(FormContext);

  return (
    <>
        <TwoColumnBox
        title="Personal Details"
        section="personalInfo"
        inputConfig={personalDataInputConfig}
        onFieldChange={(key, value) =>
            handleFieldChange("personalInfo", key, value)
        }
        />
        <OneColumnBox
        label="Short paragraph at the top of your CV, in which you summarize your relevant experience and skills in 4 to 6 lines."
        name="profile"
        section="personalInfo"
        onFieldChange={(key, value) =>
          handleFieldChange("personalInfo", key, value)
        }
      />
    </>
  );
};

export default PersonalDetails;
