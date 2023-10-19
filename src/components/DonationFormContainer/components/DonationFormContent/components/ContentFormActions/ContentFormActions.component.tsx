import classes from './ContentFormActions.module.scss';
import classNames from 'classnames';

export const ContentFormActions = () => {

    return (
        <footer className={classes.rootContainer}>
            <div className={classes.buttonContainer}>
                <button className={classNames(classes.buttonDefault, classes.cancelButton)}>Cancel</button>
            </div>

            <div className={classes.buttonContainer}>
                <button className={classNames(classes.buttonDefault, classes.continueButton)}>Continue</button>
            </div>
        </footer>
    )
}