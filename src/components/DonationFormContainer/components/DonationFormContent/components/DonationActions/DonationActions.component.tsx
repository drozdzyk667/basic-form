import classes from './DonationActions.module.scss';
import Dollar from '../../../../../../assets/dollar.png';
import ChevronRight from '../../../../../../assets/chevron_right.png';
import ChevronLeft from '../../../../../../assets/chevron_left.png';
import { MAX_DONATION_LENGTH } from '../../../../../../commons/helpers';


interface DonationActionsProps {
    onHandleAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onHandleOnBlurAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onHandleSubstractMonth: () => void;
    onHandleAddMonth: () => void;
    month: string;
    amount: string;
}

export const DonationActions = (props: DonationActionsProps) => {
    const { onHandleAmount: handleAmount, onHandleOnBlurAmount: handleOnBlurAmount,
        onHandleSubstractMonth: handleSubstract, onHandleAddMonth: handleAdd, month, amount } = props;

    return (
        <section className={classes.rootContainer}>
            <div className={classes.inputWrapper}>
                <label className={classes.inputLabel}>I can donate</label>
                <div className={classes.inputContainer}>
                    <img className={classes.icon} src={Dollar} alt="dollar" />
                    <input className={classes.inputMoney} placeholder="0,00" value={amount} type='text' maxLength={MAX_DONATION_LENGTH} onBlur={handleOnBlurAmount} onChange={handleAmount} />
                </div>
            </div>
            <div className={classes.inputWrapper}>
                <label className={classes.inputLabel}>Every month until</label>
                <div className={classes.inputWithButtons}>
                    <img src={ChevronLeft} alt="arrow-left" onClick={handleSubstract} />
                    <div className={classes.dateInputWrapper}>
                        <div className={classes.inputMonths}>{month}</div>
                        <label>2023</label>
                    </div>
                    <img src={ChevronRight} alt="arrow-right" onClick={handleAdd} />
                </div>
            </div>
        </section>
    )
}