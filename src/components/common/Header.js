import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({saving}) => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {saving && <LoadingDots dots={10} interval={100} />}
    </nav>
  );
};
Header.propTypes = {
  saving: PropTypes.bool.isRequired
};

export default Header;
