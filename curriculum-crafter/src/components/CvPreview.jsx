import { useContext } from "react";
import { FormContext } from "../store/user-form-context";
import classes from "./CvPreview.module.css";
import emailIcon from "../assets/mail-svgrepo-com.svg";
import phoneIcon from "../assets/mobile-svgrepo-com.svg";
import birthdateIcon from "../assets/calendar-svgrepo-com.svg";
import addressIcon from "../assets/branch-svgrepo-com.svg";
import siteIcon from "../assets/world-svgrepo-com.svg";
import IconDetail from "../ui/IconDetail";

const CvPreview = () => {
  const { cvFormData } = useContext(FormContext);
  const {
    fullname,
    lastname,
    email,
    phone,
    birthdate,
    profile,
    country,
    city,
    address,
    charge,
    site,
  } = cvFormData.personalInfo;
  const { company, position, startDate, endDate, description } =
    cvFormData.workExperience[0];
  const { skills } = cvFormData;

  const name = fullname + " " + lastname;
  const fullAddress = [country, city, address].filter(Boolean).join(", ");
  const concateSkills = skills.join(", ");
  const work = [company, position].filter(Boolean).join(", ");
  const duration = [startDate, endDate].filter(Boolean).join(" / ");

  return (
    <div className={classes.previewContainer}>
      <div className={classes.personalInfo}>
        <div className={classes.profile}>
          <h3>{charge}</h3>
          <p>{profile}</p>
        </div>
        {skills.length > 0 && (
          <div>
            <h3>Skills:</h3>
            <p>{concateSkills}</p>
          </div>
        )}
        <div className={classes.details}>
          <IconDetail icon={emailIcon} altText="email-icon" detail={email} />
          <IconDetail icon={phoneIcon} altText="phone-icon" detail={phone} />
          <IconDetail icon={siteIcon} altText="site-icon" detail={site} />
          <IconDetail icon={birthdateIcon} altText="birthdate-icon" detail={birthdate} />
          <IconDetail icon={addressIcon} altText="address-icon" detail={fullAddress} />
        </div>
      </div>
      <div className={classes.categories}>
        <h1>{name}</h1>
        <h2>Work Experience</h2>
        <div className={classes.workDuration}>
          <p>{work}</p>
          <p>{duration}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CvPreview;
