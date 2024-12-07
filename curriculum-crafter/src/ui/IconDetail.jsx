import { formatDate, isDateString } from "../utils/dataUtils";
import classes from "./IconDetail.module.css";

const IconDetail = ({ icon, altText, detail }) => {

  const formattedDetail = isDateString(detail) ? formatDate(detail) : detail;

  return (
    <div className={classes.iconDetailContainer}>
      {formattedDetail && (
        <>
          <img src={icon} alt={altText} width="10" />
          <p>{formattedDetail}</p>
        </>
      )}
    </div>
  );
};

export default IconDetail;
