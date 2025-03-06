const CategoryBlock = ({ title, category, duration, description }) => {
  return (
    <>
      <h2 className="my-2.5 mx-0 font-semibold">{title}</h2>
      <div className="text-right text-sm">
        <p>{category}</p>
        <p>{duration}</p>
      </div>
      <p className="text-sm">{description}</p>
    </>
  );
};

export default CategoryBlock;
