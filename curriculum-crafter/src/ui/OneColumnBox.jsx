import Input from "./Input";

const OneColumnBox = ({ title, description, label, name, onFieldChange }) => {

  return (
    <div className="text-left leading-8">
      <h2 className="mt-2.5 text-lg text-slate-800 font-medium">{title}</h2>
      <p>{description}</p>
      <Input
        textarea
        label={label}
        name={name}
        onChange={(e) => onFieldChange(name, e.target.value)}
      />
    </div>
  );
};

export default OneColumnBox;
