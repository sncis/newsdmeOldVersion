import React from 'react';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import Checkbox from '../components/articles/Checkbox';
import configureMockStore from 'redux-mock-store';
import { SelectionParametersHeadlines } from '../components/articles/SelectionParamsTopHeadlines';

const middleware = [thunk]
const mockStore = configureMockStore(middleware);
let store, wrapper;

describe("SelectionParamsTopHeadlinesForm", () => {
  const mockfun = jest.fn();

  beforeEach(() => {
    store = mockStore();
    wrapper =  mount(
      <Provider store={store}>
        <SelectionParametersHeadlines clearStore={mockfun} setCountries={mockfun} setCategories={mockfun} fetchArticles={mockfun} />
      </Provider>
    );
  })
  it("should render checkboxes", () => {
    const checkboxes = wrapper.find(Checkbox);
    
    expect(checkboxes).toHaveLength(12);
  });
 it("should render submit button and submit form when clicked", () => {
   const submitButton = wrapper.find('.parameter-selection-container');
   expect(submitButton).toHaveLength(1);

   submitButton.simulate('submit', { mockfun } );
   expect(mockfun).toHaveBeenCalled()
  });
})