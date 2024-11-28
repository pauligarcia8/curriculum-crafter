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
      const sectionData = prevState[section] || [];
  
      // Si la sección es un array
      if (Array.isArray(sectionData)) {
        if (key === null) {
          // Manejar arrays simples como 'skills'
          return {
            ...prevState,
            [section]: value, // Sobrescribe todo el array (para agregar/eliminar elementos)
          };
        } else {
          // Manejar arrays de objetos (como workExperience, education)
          const updatedArray = sectionData.map((item, i) =>
            i === index ? { ...item, [key]: value } : item
          );
          return {
            ...prevState,
            [section]: updatedArray,
          };
        }
      }
  
      // Si la sección es un objeto (como personalInfo)
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
