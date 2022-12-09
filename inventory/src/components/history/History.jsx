import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function deleteHistory(id) {
  console.log(id);
  if (id != null) {
    fetch("https://localhost:7026/item_history?id=" + id, {
      method: "DELETE",
    }).then(() => window.location.reload(false));
  }
}

class HistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch("https://localhost:7026/item_history", {
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
        <Link className="btn btn-secondary mt-3 mb-5" to="/create-history">
          New Item History
        </Link>
        <Row className="d-flex justify-content-evenly">
          {this.state.data == null ? (
            <></>
          ) : (
            this.state.data.map((history) => (
              <Card className="mb-2" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>
                    {history.username}'s {history.item.name}
                  </Card.Title>
                  Start year: {history.startYear}
                  <br />
                  End year: {history.endYear}
                  <br />
                  <Link
                    className="btn btn-secondary me-2"
                    to={{
                      pathname: "/update-history/" + history.itemHistory_ID,
                    }}
                  >
                    Update
                  </Link>
                  <Button
                    variant="secondary"
                    onClick={(e) => deleteHistory(history.itemHistory_ID)}
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

export default HistoryPage;
