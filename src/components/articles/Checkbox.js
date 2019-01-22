import React from "react";

class Checkbox extends React.Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));
    return handleCheckboxChange(label);
  };

  render() {
    const { name } = this.props;
    const { label } = this.props;
    const { isChecked } = this.state;
    return (
      <div className={`${ name }-checkbox`}>
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {label}
        </label>
      </div>
    );
  }
}

export default Checkbox;