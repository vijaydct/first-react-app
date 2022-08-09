import React from "react";
import TasksTable from "./Table";
import TasksForm from "./Forms";

class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  handleRemove = id => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      this.setState(prevState => {
        return {
          tasks: prevState.tasks.filter(task => task.id !== id)
        };
      });
    }
  };


  handleShow = task => {
    alert(`id - ${task.id}, title- ${task.title}, status - ${task.status}`);
  };

  addTask= (task)=>{
    this.setState((prevState)=>{
      return {
        tasks: prevState.tasks.concat(task)
      }
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <TasksTable 
          data={this.state.tasks}
          handleShow={this.handleShow}
          handleRemove={this.handleRemove}
         />
        <TasksForm
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default Tasks;
