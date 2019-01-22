import React from 'react';
import Checkbox from '../components/articles/Checkbox';

describe("Checkbox", () => {
  it("should be checked onChange", () => {

    const label= "es";
    const onChange= jest.fn()
  
    const wrapper = shallow(<Checkbox name="country"
      label={label}
      handleCheckboxChange={onChange}
      key={label} />
    );
    const checkbox = () => wrapper.find('input');
    
    expect(checkbox().prop('checked')).toBe(false);
    checkbox().simulate('change', {target: { checked: true}});
    
    expect(checkbox().prop('checked')).toBe(true);

  })
})

