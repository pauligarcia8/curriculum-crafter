import Input from "./Input";

const TwoColumnBox = ({ title, description, inputConfig, onFieldChange }) => {
  const renderInputs = (column) => {
    const filteredInputs = inputConfig.filter(
      (input) => input.column === column
    );

    return filteredInputs.map((input) => {
      return (
        <Input
          key={input.name}
          name={input.name}
          label={input.label}
          type={input.type}
          onChange={(e) => onFieldChange(input.name, e.target.value)}
        />
      );
    });
  };

  return (
    <div className="text-left leading-8">
      {title && (
        <h2 className="mt-2.5 text-lg text-slate-800 font-medium">{title}</h2>
      )}
      {description && <p className="text-sm">{description}</p>}
      <div className="flex items-center justify-between gap-5 overflow-y-auto">
        <div className="flex flex-1 flex-col max-h-[500px]">
          {renderInputs(1)}
        </div>
        <div className="flex flex-1 flex-col max-h-[500px]">
          {renderInputs(2)}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnBox;
