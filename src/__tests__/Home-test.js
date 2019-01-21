import React from 'react';
import Home from '../components/Home';
import Header from '../components/header/Header';
import SelectionThumbnail from '../components/SelectionThumbnail';

describe("Home", () => {
  it("should render", () => {
    const home = shallow(<Home />);
    expect(home).not.toBeNull();
  });

  it("should render childrens", () => {
    const wrapper = shallow(<Home />);
   
    const header = wrapper.find(Header);
    const selectionThumbnails = wrapper.find(SelectionThumbnail);
    
    expect(header).toHaveLength(1);
    expect(selectionThumbnails).toHaveLength(2);
  });
});