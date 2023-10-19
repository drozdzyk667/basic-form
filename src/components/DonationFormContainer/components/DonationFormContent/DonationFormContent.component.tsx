import { useCallback, useState } from 'react';
import classes from './DonationFormContent.module.scss';
import { ContentFormActions } from './components/ContentFormActions/ContentFormActions.component';
import { DonationActions } from './components/DonationActions/DonationActions.component';
import { SummaryBox } from './components/SummaryBox/SummaryBox.component';
import { addZeroIfNeeded, formatNumber, getFutureMonthsThisYear } from '../../../../commons/helpers';


export const DonationFormContent = () => {
    const [amount, setAmount] = useState<string>('');

    const futureMonths = getFutureMonthsThisYear();
    const firstMonth = futureMonths[0];
    const lastMonth = futureMonths[futureMonths.length - 1];

    const [month, setMonth] = useState<string>(firstMonth);

    const handleOnBlurAmount = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(addZeroIfNeeded(event.target.value));
    }, []);

    const handleAmount = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9,.]*$/

        if (event.target.value === '' || regex.test(event.target.value)) {
            setAmount(formatNumber(event.target.value));
        }
    }, []);

    const handleAddMonth = useCallback(() => {
        if (month === lastMonth) {
            setMonth(firstMonth);
        } else {
            setMonth((prevMonth) => futureMonths[futureMonths.indexOf(prevMonth) + 1]);
        }

    }, [firstMonth, futureMonths, lastMonth, month]);

    const handleSubstractMonth = useCallback(() => {
        if (month === firstMonth) {
            setMonth(lastMonth);
        } else {
            setMonth((prevMonth) => futureMonths[futureMonths.indexOf(prevMonth) - 1]);
        }

    }, [firstMonth, futureMonths, lastMonth, month]);

    return (
        <section className={classes.rootContainer}>
            <DonationActions amount={amount} month={month} onHandleOnBlurAmount={handleOnBlurAmount} onHandleAmount={handleAmount} onHandleSubstractMonth={handleSubstractMonth} onHandleAddMonth={handleAddMonth} />
            <SummaryBox amount={amount} month={month} />
            <ContentFormActions />
        </section>
    )
}