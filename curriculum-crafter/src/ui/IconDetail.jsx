import { formatDate, isDateString } from "../utils/dataUtils";

const IconDetail = ({ icon, altText, detail }) => {
  const formattedDetail = isDateString(detail) ? formatDate(detail) : detail;

  return (
    <div className="flex items-start gap-2">
      {formattedDetail && (
        <>
          <div className="w-6 h-6 flex flex-shrink-0 items-center justify-center">{icon}</div>
          <span className="text-gray-700 break-words whitespace-pre-wrap overflow-hidden">
            {detail}
          </span>
        </>
      )}
    </div>
  );
};

export default IconDetail;

