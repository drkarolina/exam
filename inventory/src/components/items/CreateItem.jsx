import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      creationYear: "",
      room: "",
      endDate: "",
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

  newItem() {
    const { navigate } = this.props;

    fetch("https://localhost:7026/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        creationYear: this.state.creationYear,
        room: this.state.room,
        endDate: this.state.endDate,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        navigate("/items");
        window.location.reload(false);
      });
  }
  render() {
    return (
      <Form className="p-2 w-25">
        <FormControl
          id="name"
          name="name"
          placeholder="Name"
          value={this.state.name}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="price"
          name="price"
          placeholder="Price"
          value={this.state.price}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="creationYear"
          name="creationYear"
          placeholder="Creation Year"
          value={this.state.creationYear}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="room"
          name="room"
          placeholder="Room"
          value={this.state.room}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <FormControl
          id="endDate"
          name="endDate"
          placeholder="End Date"
          value={this.state.endDate}
          className="mb-2"
          onChange={this.handleInputChange}
        />
        <Button variant="outline-success" onClick={() => this.newItem()}>
          Create
        </Button>
      </Form>
    );
  }
}

export default function (props) {
  const navigate = useNavigate();

  return <CreateItem navigate={navigate} />;
}
