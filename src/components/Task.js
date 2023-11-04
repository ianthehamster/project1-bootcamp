import React from "react";
import TaskUpdate from "./TaskUpdate";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: this.props.title, // Initialize title in the local state
      task: this.props.task, // Initialize task in the local state
    };
  }

  handleUpdateClick = () => {
    this.setState({ isEditing: true });
  };

  handleUpdateComplete = () => {
    this.setState({ isEditing: false });
  };

  // ... (delete logic, if needed)
  handleDeleteClick = () => {
    this.props.deleteTask(this.props.id); // Calls the deleteTask function defined in TaskList.js
  };

  render() {
    if (this.state.isEditing) {
      return (
        <TaskUpdate
          id={this.props.id}
          title={this.state.title} // Pass the local state title
          task={this.state.task} // Pass the local state task
          updateTask={this.props.updateTask}
          onUpdateComplete={this.handleUpdateComplete} // Pass the callback function
        />
      );
    }

    return (
      <div>
        <h1>Title: {this.props.title}</h1>
        <h2>Task: {this.props.task}</h2>
        <button onClick={this.handleUpdateClick}>Update</button>
        <button onClick={this.handleDeleteClick}>Delete</button>
      </div>
    );
  }
}

export default Task;
