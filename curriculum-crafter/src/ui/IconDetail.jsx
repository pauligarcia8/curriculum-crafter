import classes from "./IconDetail.module.css";

const IconDetail = ({ icon, altText, detail }) => {
  return (
    <div className={classes.iconDetailContainer}>
      {detail && (
        <>
          <img src={icon} alt={altText} width="10" />
          <p>{detail}</p>
        </>
      )}
    </div>
  );
};

export default IconDetail;
