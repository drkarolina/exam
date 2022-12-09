import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

class UpdateHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      startYear: "",
      endYear: "",
      item_ID: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  updateHistory() {
    const { navigate } = this.props;

    fetch(
      "https://localhost:7026/item_history?id=" +
        window.location.pathname.slice(16),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          startYear: this.state.startYear,
          endYear: this.state.endYear,
          item_ID: this.state.item_ID,
        }),
      }
    ).then((res) => {
      navigate("/history");
      window.location.reload(false);
    });
  }
  render() {
    return (
      <Form className="p-2 w-25">
        <FormControl
          id="username"
          name="username"
          placeholder="Username"
          value={this.state.username}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="startYear"
          name="startYear"
          placeholder="Start Year"
          value={this.state.startYear}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="endYear"
          name="endYear"
          placeholder="End Year"
          value={this.state.endYear}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="item_ID"
          name="item_ID"
          placeholder="Item ID"
          value={this.state.item_ID}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <Button variant="outline-success" onClick={() => this.updateHistory()}>
          Update
        </Button>
      </Form>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();

  return <UpdateHistory navigate={navigate} />;
}
