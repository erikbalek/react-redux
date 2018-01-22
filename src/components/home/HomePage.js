import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jumbotron">
        <h1>Admin</h1>
        <p>Text</p>
        <Link to="about" className="btn btn-primary btn-lg">learn more</Link>
      </div>
    );
  }
}

export default HomePage;
