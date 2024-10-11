import Priority from "../../types/priorityEnum";

interface Props {
    priority: Priority;
}

export const PriorityPill = (props: Props) => {
    let cls = "";
    switch (props.priority) {
        case Priority.HIGH:
            cls = "bg-red-500 text-white ";
            break;
        case Priority.MEDIUM:
            cls = "bg-yellow-500 text-white";
            break;
        case Priority.LOW:
            cls = "bg-blue-500 text-white";
            break;
    }

    return (
        <div className={cls}>
                {
                    props.priority
                }
        </div>
    )
}