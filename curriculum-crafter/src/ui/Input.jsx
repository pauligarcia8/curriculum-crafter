const Input = ({ label, name, textarea, className, ...props }) => {
  const InputComponent = textarea ? "textarea" : "input";

  return (
    <>
      {label && (
        <label htmlFor={name} className="block text-sm my-2.5">
          {label}
        </label>
      )}
      <InputComponent
        id={name}
        maxLength="150"
        name={name}
        className={`w-full p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-gray-500 focus:border-gray-500 ${
          className || ""
        }`}
        {...props}
      />
    </>
  );
};

export default Input;
