import classes from './DonationFormHeader.module.scss';
import HeaderIcon from '../../../../assets/header_icon.png';
import Cross from '../../../../assets/cross.png';

export const DonationFormHeader = () => {

    return (
        <header className={classes.rootContainer}>
            <img src={HeaderIcon} width={72} alt="hader-icon" />
            <section className={classes.titleContainer}>
                <div className={classes.title}>The giving block</div>
                <div className={classes.subTitle}>Set up your donation goal!</div>
            </section>
            <img className={classes.cross} src={Cross} alt="cross-button" />
        </header>
    )
}