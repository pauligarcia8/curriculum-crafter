import { createContext, useState } from "react";
import { formData as cvFormData } from "../utils/formData";

const ctxValue = {
  cvFormData,
  handleFieldChange: () => {},
};

export const FormContext = createContext(ctxValue);

export default function FormContextProvider({ children }) {
  const [formState, setFormState] = useState(cvFormData);

  const handleFieldChange = (section, key, value, index = null) => {
    setFormState((prevState) => {
      const sectionData = prevState[section];
  
      if (Array.isArray(sectionData)) {
        // Si la sección es un array (workExperience, education)
        const updatedArray = sectionData.map((item, i) =>
          i === index ? { ...item, [key]: value } : item
        );
        return {
          ...prevState,
          [section]: updatedArray,
        };
      }
  
      // Si la sección es un objeto (personalInfo)
      return {
        ...prevState,
        [section]: {
          ...sectionData,
          [key]: value,
        },
      };
    });
  };

  const ctxValue = {
    cvFormData: formState,
    handleFieldChange,
  };

  return (
    <FormContext.Provider value={ctxValue}>{children}</FormContext.Provider>
  );
}
