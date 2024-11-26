import Input from './Input';
import classes from './TwoColumnBox.module.css';

const TwoColumnBox = ({title, inputType, onFieldChange,}) => {

    const personalDataInputConfig = [
        { name: "fullname", label: "Nombre/s", type: "text", column: 1 },
        { name: "lastname", label: "Apellido/s", type: "text", column: 1 },
        { name: "birthdate", label: "Date of Birth", type: "date", column: 1 },
        { name: "email", label: "Email", type: "email", column: 1 },
        { name: "phone", label: "Phone Number", type: "text", column: 2 },
        { name: "country", label: "Country", type: "text", column: 2 },
        { name: "city", label: "City", type: "text", column: 2 },
        { name: "address", label: "Address", type: "text", column: 2 },
    ];
    
    const dateInputConfig = [
        { name: "startDate", label: "From", type: "date", column: 1 },
        { name: "endDate", label: "To", type: "date", column: 2 },
    ]
    
    const inputConfig = inputType === 'date' ? dateInputConfig : personalDataInputConfig;

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