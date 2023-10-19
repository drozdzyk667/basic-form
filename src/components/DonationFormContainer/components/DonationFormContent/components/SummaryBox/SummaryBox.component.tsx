import classes from './SummaryBox.module.scss'

interface InfoBoxProps {
    amount: string;
    month: string;
}

export const SummaryBox = (props: InfoBoxProps) => {
    const { amount, month = 'January' } = props;

    return (
        <section className={classes.rootContainer}>
            <div className={classes.amountContainer}>
                <div className={classes.totalCaption}>Total Amount</div>
                <div className={classes.totalValue}>$200,000</div>
            </div>
            <div className={classes.infoBoxContainer}>You will be sending {<span className={classes.bolded}>${amount || '0,00'}</span>} every month, until {<span className={classes.bolded}>{month} 2023</span>}. Thank you!</div>
        </section>
    )
}