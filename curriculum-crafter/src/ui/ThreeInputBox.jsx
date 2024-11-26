import OneColumnBox from "./OneColumnBox";
import TwoColumnBox from "./TwoColumnBox";

const ThreeInputBox = ({
  title,
  description,
  type,
  section,
  index,
  onFieldChange,
}) => {
  return (
    <>
      <OneColumnBox
        title={title}
        description={description}
        onFieldChange={(key, value) =>
          onFieldChange(section, key, value, index)
        }
      />
      <TwoColumnBox
        inputType={type}
        onFieldChange={(key, value) =>
          onFieldChange(section, key, value, index)
        }
      />
    </>
  );
};

export default ThreeInputBox;
