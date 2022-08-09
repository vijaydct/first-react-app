import React from "react";
// import PropTypes from "prop-types";

class TasksForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      status: false,
      completedDate: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      id: this.state.id,
      title: this.state.title,
      status: this.state.status,
      completedDate: this.state.completedDate
    };
    this.props.addTask(formData);
    this.setState(prevState => {
      return {
        id: "",
        title: "",
        status: false,
        completedDate: ""
      };
    });
  };

  handleChange =(e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleStatusChange = e => {
    const status = e.target.checked;
    this.setState({ status });
  };

  render() {
    return (
      <div>
        <h2>Add Task</h2>
        <form onSubmit={this.handleSubmit}>
          <label> id </label>
          <input
            type="number"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label> title </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label> status </label>
          <input
            type="checkbox"
            onChange={this.handleStatusChange}
            checked={this.state.status}
          />{" "}
          <br />
          {this.state.status && (
            <div>
              <label> completed date </label>
              <input
                type="date"
                name="completedDate"
                value={this.state.completedDate}
                onChange={this.handleChange}
              />
            </div>
          )}
          <input type="submit" value="add task" />
        </form>
      </div>
    );
  }
}

// TasksForm.PropTypes = {
//   addTask: PropTypes.func.isRequired
// };

export default TasksForm;
