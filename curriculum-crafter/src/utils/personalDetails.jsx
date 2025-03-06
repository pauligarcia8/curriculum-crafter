import {
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

export const getDetailsData = (personalInfo) => [
  { icon: <EnvelopeIcon className="w-4 h-4 text-gray-600" />, altText: "email-icon", detail: personalInfo.email },
  { icon: <PhoneIcon className="w-4 h-4 text-gray-600" />, altText: "phone-icon", detail: personalInfo.phone },
  { icon: <GlobeAltIcon className="w-4 h-4 text-gray-600" />, altText: "site-icon", detail: personalInfo.site },
  {
    icon: <CalendarIcon className="w-4 h-4 text-gray-600" />,
    altText: "birthdate-icon",
    detail: personalInfo.birthdate,
  },
  {
    icon: <MapPinIcon className="w-4 h-4 text-gray-600" />,
    altText: "address-icon",
    detail: [personalInfo.country, personalInfo.city, personalInfo.address]
      .filter(Boolean)
      .join(", "),
  },
];