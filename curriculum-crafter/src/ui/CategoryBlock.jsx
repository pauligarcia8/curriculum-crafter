import classes from "./CategoryBlock.module.css";

const CategoryBlock = ({ title, category, duration, description }) => {
    
    return (
        <>
            <h2>{title}</h2>
            <div className={classes.workDuration}>
                <p>{category}</p>
                <p>{duration}</p>
            </div>
            <p>{description}</p>
        </>
    )
}

export default CategoryBlock;