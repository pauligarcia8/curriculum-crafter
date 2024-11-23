import { createContext, useState } from "react";

const initialState = {
  personalInfo: {
    fullname: "",
    lastname: "",
    birthdate: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
  },
  workExperience: [
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  education: [
    {
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ],
  skills: [],
};

const ctxValue = {
  initialState,
  updatePersonalInfo: () => {},
  updateWorkExperience: () => {},
  updateEducation: () => {},
  updateSkill: () => {},
};

export const FormContext = createContext(ctxValue);

export default function FormContextProvider({ children }) {
  const [formState, setFormState] = useState(initialState);

  const handleUpdatePersonalInfo = (newInfo) => {
    setFormState((prevState) => ({
        ...prevState,
        personalInfo: {
            ...prevState.personalInfo,
            ...newInfo
        }
    }));
  }

  const handleUpdateWorkExperience = () => {
    
  }

  const handleUpdateEducation = () => {
    
  }

  const handleUpdateSkill = () => {

  }

  const ctxValue = {
    initialState: formState,
    updatePersonalInfo: handleUpdatePersonalInfo,
    updateWorkExperience: handleUpdateWorkExperience,
    updateEducation: handleUpdateEducation,
    updateSkill: handleUpdateSkill,
  };

  return (
    <FormContext.Provider value={ctxValue}>{children}</FormContext.Provider>
  );
};
