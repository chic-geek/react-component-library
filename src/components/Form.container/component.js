import "./component.css";
import React from "react";

class Form extends React.Component {
  state = {
    values: this.props.initialValues || {},
    errors: {},
  };

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: newValue,
      },
    }));
  };

  handleMultiCheck = (event, id) => {
    const { name, checked } = event.target;
    this.setState((prevState) => {
      // selects the correct property of the components state object
      // based on the name attribute of the input targeted.
      let multiCheckArray = prevState.values[name];
      // grabs the index within the above array and store that
      // for later.
      const objIndex = multiCheckArray.findIndex((obj) => obj.id === id);
      // set the isChecked property on the changed object to whatever
      // is the checked value of our input that's been targeted.
      multiCheckArray[objIndex].isChecked = checked;
      return {
        values: {
          ...prevState.values,
          [name]: [...multiCheckArray],
        },
      };
    });
  };

  render() {
    return this.props.children({
      ...this.state,
      handleChange: this.handleChange,
      handleMultiCheck: this.handleMultiCheck,
    });
  }
}

export default Form;
