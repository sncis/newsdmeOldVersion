import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

describe("Home", () => {
  it("should render", () => {
    const home = shallow(<Home />);

    expect(home).not.toBeNull();

  });
});