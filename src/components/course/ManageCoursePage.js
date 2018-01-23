import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
  }
 
  render() {
    return (
      <CourseForm
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors}

      />
    );
  }
}
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
};
// onChange={this.state.onChange}
// onSave={this.state.onSave}// loading, errors}
function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

//export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
