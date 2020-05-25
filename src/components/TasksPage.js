import React, { Component } from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = ['Unstarted','In Progress', 'Completed'];

export default class TasksPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showNewCardForm: false,
            title: '',
            description:''
        };
    }

    onTitleChange = (event) => {
       this.setState({ title: event.target.value });
    };

    onDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    };

    resetForm() {
        this.setState({
            title: '',
            showNewCardForm:false,
            description:''
        });
    }

    onCreateTask = (event) => {
        event.preventDefault();
        this.props.onCreateTask({
            title:this.state.title,
            description: this.state.description
        });
        this.resetForm();
    };

    toggleForm = () => {
        this.setState({ showNewCardForm: !this.state.showNewCardForm });
    };

    renderTaskList = () => {
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList key={status}
                             status={status}
                             tasks={statusTasks}
                             onStatusChange={this.props.onStatusChange}/>
        });
    }

    render() {
        return(
            <div className="tasks">
                <div className="task-header">
                    <button className="button button-default" onClick={this.toggleForm}>
                        + New Task
                    </button>
                </div>

                { this.state.showNewCardForm && (
                    <form className="new-task-form" onSubmit={this.onCreateTask}>
                        <input className="full-width-input"
                               onChange={this.onTitleChange}
                               value={this.state.title}
                               type="text"
                               placeholder="Title"/>
                        <input className="full-width-input"
                               onChange={this.onDescriptionChange}
                               value={this.state.description}
                               type="text"
                               placeholder="Description"/>
                        <button className="button" type="submit">Save</button>
                    </form>
                )}
                <div className="task-lists">
                    {this.renderTaskList()}
                </div>
            </div>
        );
    }

}