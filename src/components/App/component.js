import "./component.css";
import React from "react";
import Form from "../Form/component";

const initialFormState = {
  firstname: "",
  address: "",
  fruits: [
    { id: 1, name: "fruits", value: "banana", isChecked: false },
    { id: 2, name: "fruits", value: "apple", isChecked: false },
    { id: 3, name: "fruits", value: "orange", isChecked: false },
    { id: 4, name: "fruits", value: "grape", isChecked: false },
    { id: 5, name: "fruits", value: "mango", isChecked: false },
  ],
  shipping: "",
  favcity: "",
  acceptTerms: "",
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form initialValues={initialFormState}>
          {({ values, handleChange, handleMultiCheck }) => (
            <form>
              <fieldset className="fieldset">
                <div className="formControl">
                  <label className="label" htmlFor="firstname">
                    Firstname
                  </label>
                  <input
                    className="input"
                    name="firstname"
                    id="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    type="text"
                  />
                </div>

                <div className="formControl">
                  <label className="label" htmlFor="address">
                    Enter your address
                  </label>
                  <textarea
                    className="input"
                    name="address"
                    id="address"
                    value={values.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="formControl">
                  <input
                    className="input"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={values.acceptTerms}
                    onChange={handleChange}
                    type="checkbox"
                  />
                  <label className="label" htmlFor="acceptTerms">
                    I accept the <a href="javascript:void(0)">Terms and Conditions</a>
                  </label>
                </div>
              </fieldset>

              <fieldset className="fieldset">
                <legend>Select the fruits you like</legend>
                {values.fruits.map((fruit) => (
                  <div className="formControl" key={fruit.id}>
                    <input
                      className="input"
                      name={fruit.name}
                      id={fruit.value}
                      value={fruit.value}
                      checked={fruit.isChecked}
                      onChange={(event) => handleMultiCheck(event, fruit.id)}
                      type="checkbox"
                    />
                    <label className="label" htmlFor={fruit.value}>
                      {fruit.value}
                    </label>
                  </div>
                ))}
              </fieldset>

              <fieldset className="fieldset">
                <legend>Choose a shipping method</legend>
                <div className="formControl">
                  <input
                    className="input"
                    name="shipping"
                    id="overnight"
                    value="overnight"
                    onChange={handleChange}
                    type="radio"
                  />
                  <label className="label" htmlFor="overnight">
                    Overnight
                  </label>
                </div>

                <div className="formControl">
                  <input
                    className="input"
                    name="shipping"
                    id="twoday"
                    value="twoday"
                    onChange={handleChange}
                    type="radio"
                  />
                  <label className="label" htmlFor="twoday">
                    Two day
                  </label>
                </div>

                <div className="formControl">
                  <input
                    className="input"
                    name="shipping"
                    id="ground"
                    value="ground"
                    onChange={handleChange}
                    type="radio"
                  />
                  <label className="label" htmlFor="ground">
                    Ground
                  </label>
                </div>
              </fieldset>

              <fieldset className="fieldset">
                <div className="formControl">
                  <label className="label" htmlFor="favcity">
                    Choose your favorite city?
                  </label>
                  <select
                    className="input"
                    name="favcity"
                    id="favcity"
                    value={values.favcity}
                    onChange={handleChange}>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="London">London</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Moscow">Moscow</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="New York">New York</option>
                    <option value="Sao Paulo">Sao Paulo</option>
                    <option value="Tokyo">Tokyo</option>
                  </select>
                </div>
              </fieldset>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

export default App;
