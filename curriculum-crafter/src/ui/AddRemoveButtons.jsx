import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

const AddRemoveButtons = ({ section, index, addSection, removeSection }) => {
  return (
    <div className="flex gap-2.5 justify-end">
      <button className="cursor-pointer" onClick={() => addSection(section)}>
        <PlusCircleIcon className="size-6 text-blue-500" />
      </button>
      <button
        className="cursor-pointer"
        onClick={() => removeSection(section, index)}
      >
        <MinusCircleIcon className="size-6 text-red-700"/>
      </button>
    </div>
  );
};

export default AddRemoveButtons;
