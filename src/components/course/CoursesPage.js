import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   course: {title: ""}
    // };
    // this.onClickSave = this.onClickSave.bind(this);
    // this.onTitleChange = this.onTitleChange.bind(this);

  }
/*
  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
    // this.props.createCourse(this.state.course);
    //return false; //not needed?
  }
*/

  render() {
    const {courses} = this.props;
    return (
      <CourseList courses={courses}/>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  // createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

//export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
