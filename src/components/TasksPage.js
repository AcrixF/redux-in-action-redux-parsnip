import React, { Component } from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = ['Unstarted','In Progress', 'Completed'];

export default class TasksPage extends Component {

    renderTaskList = () => {
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={statusTasks}/>
        });
    }

    render = () =>
        <div className="tasks">
            <div className="task-lists">
                { this.renderTaskList() }
            </div>
        </div>

}