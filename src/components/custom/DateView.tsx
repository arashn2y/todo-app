interface Props {
    className?: string;
    date: Date;
}

const DateView = (props: Props) => {
    return (
        <div className={props.className}>
            {
                props.date.toLocaleDateString()
            }
        </div>
    )
}

export default DateView;