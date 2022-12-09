import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function deleteItem(id) {
  console.log(id);
  if (id != null) {
    fetch("https://localhost:7026/item?id=" + id, { method: "DELETE" }).then(
      () => window.location.reload(false)
    );
  }
}

class ItemsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch("https://localhost:7026/item", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data });
      });
  }
  render() {
    return (
      <Container>
        <Link className="btn btn-secondary mt-3 mb-5 me-2" to="/">
          Back
        </Link>
        <Link className="btn btn-secondary mt-3 mb-5" to="/create-item">
          New Item
        </Link>
        <Row className="d-flex justify-content-evenly">
          {this.state.data == null ? (
            <></>
          ) : (
            this.state.data.map((item) => (
              <Card className="mb-2" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Subtitle className="mb-2">
                    Year: {item.creationYear}
                  </Card.Subtitle>
                  ID: {item.item_ID}
                  <br />
                  Price: {item.price}
                  <br />
                  Room: {item.room}
                  <br />
                  End date: {item.endDate}
                  <br />
                  <Link
                    className="btn btn-secondary me-2"
                    to={{ pathname: "/update-item/" + item.item_ID }}
                  >
                    Update
                  </Link>
                  <Button
                    variant="secondary"
                    onClick={(e) => deleteItem(item.item_ID)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Row>
      </Container>
    );
  }
}

export default ItemsPage;
