import React from 'react';
import { Provider } from "react-redux";
import store from '../store/store/store';
import Checkbox from '../components/articles/Checkbox';
import SelectionParamsTopHeadlinesForm from '../components/articles/SelectionParamsTopHeadlines';

describe("SelectionParamsTopHeadlinesForm", () => {
  it("should render checkboxes", () => {
    const wrapper = mount(
    <Provider store={store}>
      <SelectionParamsTopHeadlinesForm />
    </Provider>);

    const checkboxes= wrapper.find(Checkbox);
    
    expect(checkboxes).toHaveLength(12);
  });
 it("should render submit button", () => {
   const wrapper = mount(
     <Provider store={store}>
      <SelectionParamsTopHeadlinesForm />
     </Provider>
   );

   const submitButton = wrapper.find('.parameterSubmitButton');
   expect(submitButton).toHaveLength(1);
 })
})