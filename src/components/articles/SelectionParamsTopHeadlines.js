import React from 'react';
import { connect } from 'react-redux';
import Checkbox from './Checkbox';
import { setCountries, setCategories, fetchArticles, clearStore } from "../../store/actions/articleFetchActions";

import './SelectionParamsTopHeadlines.css';

const countryLabels = ['us', 'de', 'fr', 'gb','ch']
const categorieLabels = ['business', 'entertainment', 'health', 'general', 'sport', 'science', 'technology']

const mapDispatchToProps = dispatch => {
  return{
    setCountries: (countries) => dispatch(setCountries(countries)),
    setCategories: (categories) => dispatch(setCategories(categories)),
    clearStore: () => dispatch(clearStore()),
    fetchArticles: () => dispatch(fetchArticles()),
  };
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    categories: state.categories,
  }
}

class SelectionParametersHeadlines extends React.Component {
  componentWillMount = () => {
    this.selectedCountries = new Set();
    this.selectedCategories = new Set();
    
    this.props.clearStore(); 
  }

  toggleCountryCheckbox = (label) => {
    if(this.selectedCountries.has(label)) {
      this.selectedCountries.delete(label);
    }else {
      this.selectedCountries.add(label);
    }
  }

  toogleCategoryCheckbox = (label) => {
    if(this.selectedCategories.has(label)){
      this.selectedCategories.delete(label)
    }else {
      this.selectedCategories.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    this.props.clearStore();

    this.props.setCategories(this.selectedCategories);
    this.props.setCountries(this.selectedCountries);

    this.props.fetchArticles();
    
  };


  createCountryCheckbox = (label) => (
      <Checkbox
        name="country"
        label={label}
        handleCheckboxChange={this.toggleCountryCheckbox}
        key={label}
        />
  );
  
  createCategoryCheckbox = (category) => (
      <Checkbox
        name="category"
        label={category}
        handleCheckboxChange={this.toogleCategoryCheckbox}
        key={category}
      />
  );

  renderCountryCheckboxes = () => (
    countryLabels.map(this.createCountryCheckbox)
  );

  renderCategoryCheckboxes = () => (
    categorieLabels.map(this.createCategoryCheckbox)
  );

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="parameter-selection-container">
          
          <div className="selection-parameters">
            
            <div className="country-selection">
              <p>countries</p>
            
              <div className="country-selection-checkboxes">
                {this.renderCountryCheckboxes()}
              </div>
            </div>
            
            <div className="category-selection">
              <p>categories</p>
              <div className="category-selection-checkboxes">
                {this.renderCategoryCheckboxes()}
              </div>
            </div>

          </div>

          <button className="parameterSubmitButton" type="submit">
            show articles
          </button>

        </form>
      </div>
    );
  }
}

const SelectionParamsTopHeadlinesForm = connect(
  mapStateToProps,
  mapDispatchToProps)(SelectionParametersHeadlines)

  export default SelectionParamsTopHeadlinesForm;