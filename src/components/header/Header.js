import React from 'react';
import './Header.css';
import Logo from './Logo';
import Headline from './Headline';

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <Logo />
        <Headline headLine={this.props.headerLine}/>
      </div>
    )
  }
};

export default Header;