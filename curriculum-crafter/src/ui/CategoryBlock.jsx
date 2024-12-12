import classes from "./CategoryBlock.module.css";

const CategoryBlock = ({ title, category, duration, description }) => {
    console.log(description);
    return (
        <>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.workDuration}>
                <p>{category}</p>
                <p>{duration}</p>
            </div>
            <p>{description}</p>
        </>
    )
}

export default CategoryBlock;