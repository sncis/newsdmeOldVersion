import React from 'react';
import { connect } from 'react-redux';
import { fetchCustomisedArticles, clearStore } from "../../store/actions/articleFetchActions";
import "./CustomisedNewsInput.css";


const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomisedArticles: (query) => dispatch(fetchCustomisedArticles(query)),
    clearStore: () => dispatch(clearStore()),
  }
}
export class CustomisedNews extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:''
    }
  }
  componentWillMount = () => {
    this.props.clearStore();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.clearStore();
    this.props.fetchCustomisedArticles(this.state.value);
  }

  setInputValue = (e) => {
    e.preventDefault();
    this.setState({value: e.target.value});
  }
  render() {
    return(
      <div className="newsTopicInput">
        <form id="formSubmit" onSubmit={this.handleFormSubmit}>
          <input type="text" id="topicInput" placeholder="what's your main interesset today?" onChange={this.setInputValue} autoComplete="off"/>
        </form>
      </div>
    )
  }
}


const CustomisedNewsInput = connect (null, mapDispatchToProps) (CustomisedNews);
export default CustomisedNewsInput;
