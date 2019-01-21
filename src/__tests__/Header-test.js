import React from 'react';
import Header from '../components/header/Header';
import Logo from '../components/header/Logo';
import Headline from '../components/header/Headline';

describe('Header', () => {
  it('should render', () => {
    const header = shallow(<Header />);

    expect(header).toHaveLength(1);
  });
  it('should render childrens', () => {
    const wrapper = shallow(<Header headerLine="hello" />);
    
    expect(wrapper.find(Logo)).toHaveLength(1);
    expect(wrapper.find(Headline)).toHaveLength(1);
    expect(wrapper.find(Headline).prop('headLine')).toBe('hello');

;  })
})