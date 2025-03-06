import { useContext } from "react";
import { FormContext } from "../store/user-form-context";
import IconDetail from "../ui/IconDetail";
import CategoryBlock from "../ui/CategoryBlock";
import { getDetailsData } from "../utils/personalDetails.jsx";
import {
  concatenateCategoryData,
  concatenateDuration,
  hasValidData,
} from "../utils/dataUtils";

const CvPreview = () => {
  const { cvFormData } = useContext(FormContext);
  const { fullname, lastname, profile, charge } = cvFormData.personalInfo;
  const { skills } = cvFormData;

  const details = getDetailsData(cvFormData.personalInfo);
  const name = fullname + " " + lastname;
  const concatenateSkills = skills.join(", ");

  const hasExperience = hasValidData(cvFormData.workExperience);
  const hasEducation = hasValidData(cvFormData.education);

  return (
    <div className="w-[210mm] h-[297mm] max-w-2xl max-h-[90vh] rounded-lg flex flex-col shadow-lg overflow-hidden">
      <div className="flex flex-1">
        <div className="flex flex-col justify-start p-2.5 w-1/3 max-w-1/3 break-words bg-gray-200 overflow-auto">
          <div className="h-4/6">
            <h3 className="font-semibold">{charge}</h3>
            <p className="text-sm">{profile}</p>
          </div>
          {skills.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold">Skills:</h3>
              <p className="text-sm">{concatenateSkills}</p>
            </div>
          )}
          <div className="h-2/6 content-end text-sm">
            {details.map(({ icon, altText, detail }, index) => (
              <IconDetail
                key={index}
                icon={icon}
                altText={altText}
                detail={detail}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 p-2.5 break-words overflow-auto flex flex-col justify-start">
          <h1 className="text-2xl">{name}</h1>
          {hasExperience &&
            cvFormData.workExperience.map((experience, i) => (
              <CategoryBlock
                key={`${experience.company}-${i}`}
                title="Work Experience"
                category={concatenateCategoryData(
                  experience.company,
                  experience.position
                )}
                duration={concatenateDuration(
                  experience.startDate,
                  experience.endDate
                )}
                description={experience.description}
              />
            ))}
          {hasEducation &&
            cvFormData.education.map((education, i) => (
              <CategoryBlock
                key={`${education.institution}-${i}`}
                title="Education"
                category={concatenateCategoryData(
                  education.institution,
                  education.degree
                )}
                duration={concatenateDuration(
                  education.startDate,
                  education.endDate
                )}
                description={education.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CvPreview;
