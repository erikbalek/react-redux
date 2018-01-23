import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onChange, onSave, loading, errors}) => {
  return (
    <form>
      <h1>Manage course</h1>
      <TextInput
        name="title"
        label="title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
      />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
      />
    </form>
  );
};
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
