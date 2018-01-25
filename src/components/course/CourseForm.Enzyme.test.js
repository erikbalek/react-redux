import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {
      //content not needed for shallow render
      // id: 't1',
      // title: 'Test course',
      // watchHref: 'http://localhost/t1',
      // authorId: 'Test Author',
      // length: '1:23',
      // category: 'Test'
    },
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  return shallow(<CourseForm {...props}/>);
}
describe('Test CourseForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text().toLowerCase()).toEqual('manage course');
  });
  it('save btn labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value.toLowerCase()).toBe('save');
  });
  it('save btn labeled "Saving..." when saving ; @' + new Date().toLocaleTimeString("nb-NO"), () => {
    const wrapper = setup(true);
    // console.log('Test CourseForm wrapper'  + wrapper);
    expect(wrapper.find('input').props().value.toLowerCase()).toBe('saving...');
  });
});
