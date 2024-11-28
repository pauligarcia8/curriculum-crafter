import Input from './Input';
import classes from './TwoColumnBox.module.css';

const TwoColumnBox = ({title, description, inputConfig, onFieldChange}) => {

    const renderInputs = (column) => {
        const filteredInputs = inputConfig.filter((input) => input.column === column);

        return filteredInputs.map((input) => {
            return (
                <Input 
                    key={input.name}
                    name={input.name}
                    label={input.label}
                    type={input.type}
                    onChange={(e) => onFieldChange(input.name, e.target.value)}
                />
            )
        })
    }

    return (
        <div className={classes.boxContainer}>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
            <div className={classes.inputContainer}>
                <div className={classes.column}>
                    {renderInputs(1)}
                </div>
                <div className={classes.column}>
                    {renderInputs(2)}
                </div>
            </div>
        </div>
    )
}

export default TwoColumnBox;