import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import { CustomisedNews } from '../components/articles/CustomisedNewsInput';
import thunk from 'redux-thunk';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("CustomisedNewsPage", () => {
  let wrapper, store;
  const mockFormSubmit = jest.fn();

  beforeEach(() => {
    store = mockStore();
    wrapper = mount(<Provider store ={store}><CustomisedNews clearStore={mockFormSubmit} fetchCustomisedArticles={mockFormSubmit} /></Provider>);
  });

  it("should call mock submitfunction", () => {
    // console.log(wrapper.debug());
    // console.log(mockFormSubmit.mock.calls)
    const form = wrapper.find('#formSubmit');
    form.simulate('submit', { mockFormSubmit });
    expect(mockFormSubmit).toHaveBeenCalled();
  });
})