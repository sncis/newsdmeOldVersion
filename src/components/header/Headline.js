import React from 'react';

class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "max",
    }
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.changeHeaderOnScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.changeHeaderOnScroll);
  }

  changeHeaderOnScroll = () => {
    if(window.scrollY > 10){
      this.setState({value: "min"});
    }else{
      this.setState({value: "max"});
    }
  }

  render() {
    return(
      <div className={ `headerTopBar-${this.state.value}` }>
        <p>{ this.props.headLine }</p>
      </div>
    )
  }
}

export default Headline;