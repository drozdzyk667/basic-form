import classes from './DonationFormContainer.module.scss';
import { DonationFormContent } from './components/DonationFormContent/DonationFormContent.component';
import { DonationFormHeader } from './components/DonationFormHeader/DonationFormHeader.component';

export const DonationFormContainer = () => {

    return (
        <main className={classes.rootContainer}>
            <DonationFormHeader />
            <DonationFormContent />
        </main>
    )
}