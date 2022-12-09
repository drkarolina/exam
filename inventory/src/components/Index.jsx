import React, { Component } from "react";
import { Link } from "react-router-dom";

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center d-flex justify-content-around mt-5">
        <Link className="btn btn-secondary custom-button" to="/items">
          Items
        </Link>
        <Link className="btn btn-secondary custom-button" to="/history">
          History
        </Link>
      </div>
    );
  }
}

export default IndexPage;
