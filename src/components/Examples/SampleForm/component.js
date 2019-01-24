import React from "react";
import FormContainer from "../../FormContainer/component";
import FormLabel from "../../FormLabel/component";
import FormInput from "../../FormInput/component";
import FormTextarea from "../../FormTextarea/component";
import FormRadioCheck from "../../FormRadioCheck/component";
import FormSelect from "../../FormSelect/component";

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

const favcityOptions = [
  { id: 1, value: "Amsterdam", label: "Amsterdam" },
  { id: 2, value: "Buenos Aires", label: "Buenos Aires" },
  { id: 3, value: "Delhi", label: "Delhi" },
  { id: 4, value: "London", label: "London" },
  { id: 5, value: "Los Angeles", label: "Los Angeles" },
  { id: 6, value: "Tokyo", label: "Tokyo" },
];

class SampleForm extends React.Component {
  render() {
    return (
      <FormContainer initialValues={initialFormState}>
        {({ values, handleChange, handleMultiCheck }) => (
          <form>
            <fieldset className="fieldset">
              <legend>Enter your details</legend>
              <div className="formControl">
                <FormLabel htmlFor="firstname" classNames="label">
                  Firstname
                </FormLabel>
                <FormInput
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={values.firstname}
                  handleChange={handleChange}
                  classNames="input"
                />
              </div>

              <div className="formControl">
                <FormLabel htmlFor="address" classNames="label">
                  Enter your address
                </FormLabel>
                <FormTextarea
                  id="address"
                  name="address"
                  value={values.address}
                  handleChange={handleChange}
                  classNames="label"
                />
              </div>

              <div className="formControl">
                <FormRadioCheck
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={values.acceptTerms}
                  handleChange={handleChange}
                  classNames="input"
                />
                <FormLabel htmlFor="acceptTerms" classNames="label-inline">
                  I accept the <a href="javascript:void(0)">Terms and Conditions</a>
                </FormLabel>
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <legend>Select the fruits you like</legend>
              {values.fruits.map((fruit) => (
                <div className="formControl" key={fruit.id}>
                  <FormRadioCheck
                    type="checkbox"
                    id={fruit.value}
                    name={fruit.name}
                    value={fruit.value}
                    checked={fruit.isChecked}
                    handleChange={(event) => handleMultiCheck(event, fruit.id)}
                    classNames="input"
                  />
                  <FormLabel htmlFor={fruit.value} classNames="label-inline">
                    {fruit.value}
                  </FormLabel>
                </div>
              ))}
            </fieldset>

            <fieldset className="fieldset">
              <legend>Choose a shipping method</legend>
              <div className="formControl">
                <FormRadioCheck
                  type="radio"
                  id="overnight"
                  name="shipping"
                  value="overnight"
                  checked={values.shipping === "overnight"}
                  handleChange={handleChange}
                  classNames="input"
                />
                <FormLabel htmlFor="overnight" classNames="label-inline">
                  Overnight
                </FormLabel>
              </div>

              <div className="formControl">
                <FormRadioCheck
                  type="radio"
                  id="twoday"
                  name="shipping"
                  value="twoday"
                  checked={values.shipping === "twoday"}
                  handleChange={handleChange}
                  classNames="input"
                />
                <FormLabel htmlFor="twoday" classNames="label-inline">
                  Two day
                </FormLabel>
              </div>

              <div className="formControl">
                <FormRadioCheck
                  type="radio"
                  id="ground"
                  name="shipping"
                  value="ground"
                  checked={values.shipping === "ground"}
                  handleChange={handleChange}
                  classNames="input"
                />
                <FormLabel htmlFor="ground" classNames="label-inline">
                  Ground
                </FormLabel>
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <div className="formControl">
                <FormLabel htmlFor="favcity" classNames="label">
                  Choose your favorite city?
                </FormLabel>
                <FormSelect
                  id="favcity"
                  name="favcity"
                  value={values.favcity}
                  handleChange={handleChange}
                  classNames="input"
                  options={favcityOptions}
                />
              </div>
            </fieldset>
          </form>
        )}
      </FormContainer>
    );
  }
}

export default SampleForm;
