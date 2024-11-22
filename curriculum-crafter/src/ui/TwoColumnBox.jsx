import Input from './Input';
import classes from './TwoColumnBox.module.css';

const TwoColumnBox = ({title}) => {
    return (
        <div className={classes.boxContainer}>
            <h2>{title}</h2>
            <div className={classes.inputContainer}>
                <div className={classes.column}>
                    <Input name='name' label='Nombre/s' type='text' />
                    <Input name='lastname' label='Apellido/s' type='text' />
                    <Input name='birth' label='Date of Birth' type='date' />
                    <Input name='email' label='Email' type='email' />
                </div>
                <div className={classes.column}>
                    <Input name='phone' label='Phone Number' type='text' />
                    <Input name='country' label='Country' type='text' />
                    <Input name='city' label='City' type='text' />
                    <Input name='address' label='Address' type='text' />
                </div>
            </div>
        </div>
    )
}

export default TwoColumnBox;