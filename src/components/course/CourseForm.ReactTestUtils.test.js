import expect from 'expect';
import React, {PropTypes} from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {
      id: "t1",
      title: "Test course",
      watchHref: "http://localhost/t1",
      authorId: "Test Author",
      length: "1:23",
      category: "Test"
    },
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();
  return {
    props, output, renderer
  };
}
// describe('Test CourseForm via TestUtils', () => {
//   it('renders form and h1', () => {
//     const {output} = setup();
//     expect(output.type).toBe('form');
//     let [h1] = output.props.children; //destructuring first element in children
//     expect(h1.type).toBe('h1');
//   });
//   it('save btn labeled "Save" when not saving', () => {
//     const {output} = setup(false);
//     let [btn] = output.props.children[5];
//     expect(btn.value).toLower().toBe('save');
//   });
//   it('save btn labeled "Saving..." when saving ; @' + new Date().toLocaleTimeString("nb-NO"), () => {
//     const {output} = setup(true);
//     console.log('output: ' + output.props);
//     let [btn] = output.props.children[5];
//     expect(btn.value).toLower().toBe('saving...');
//   });
// });
