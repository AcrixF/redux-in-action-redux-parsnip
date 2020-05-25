import React from "react";

const TASK_STATUES = [
    'Unstarted',
    'In Progress',
    'Completed'
];

const Task = (props) => {
    return(
        <div className="task">
            <div className="task-header">
                <div>{props.task.title}</div>
                <select value={props.task.status}
                        onChange={onStatusChange}>
                    { TASK_STATUES.map(status => (<option key={status}
                                                          value={status}>{status}</option> )) }
                </select>
            </div>
            <hr/>
            <div className="task-body">{props.task.description}</div>
        </div>
    );

    function onStatusChange(event) {
        props.onStatusChange(props.task.id, event.target.value);
    }
}

export default Task;