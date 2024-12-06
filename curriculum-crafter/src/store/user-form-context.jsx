import { createContext, useState } from "react";
import { formData as cvFormData } from "../utils/formData";

const ctxValue = {
  cvFormData,
  handleFieldChange: () => {},
  addSection: () => {},
  removeSection: () => {}
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

  const addSection = (section) => {
    console.log("ADDING SECTION -->", section);
    setFormState(prevState => {
      const newSection = {
        id: Date.now(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      };
      return {...prevState, [section]: [...prevState[section], newSection]}
    });
  }

  const removeSection = (section, index) => {
    console.log("REMOVING SECTION -->", section);
    setFormState(prevState => {
      const updatedSection = prevState[section].filter((_, i) => i !== index);
      return {...prevState, [section]: updatedSection};
    })
  }

  const ctxValue = {
    cvFormData: formState,
    handleFieldChange,
    addSection,
    removeSection
  };

  return (
    <FormContext.Provider value={ctxValue}>{children}</FormContext.Provider>
  );
}
