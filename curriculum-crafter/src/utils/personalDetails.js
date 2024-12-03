import emailIcon from "../assets/mail-svgrepo-com.svg";
import phoneIcon from "../assets/mobile-svgrepo-com.svg";
import birthdateIcon from "../assets/calendar-svgrepo-com.svg";
import addressIcon from "../assets/branch-svgrepo-com.svg";
import siteIcon from "../assets/world-svgrepo-com.svg";

export const getDetailsData = (personalInfo) => [
  { icon: emailIcon, altText: "email-icon", detail: personalInfo.email },
  { icon: phoneIcon, altText: "phone-icon", detail: personalInfo.phone },
  { icon: siteIcon, altText: "site-icon", detail: personalInfo.site },
  {
    icon: birthdateIcon,
    altText: "birthdate-icon",
    detail: personalInfo.birthdate,
  },
  {
    icon: addressIcon,
    altText: "address-icon",
    detail: [personalInfo.country, personalInfo.city, personalInfo.address]
      .filter(Boolean)
      .join(", "),
  },
];
