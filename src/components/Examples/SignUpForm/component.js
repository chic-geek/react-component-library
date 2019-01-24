import React from "react";
import FormContainer from "../../FormContainer/component";
import FormLabel from "../../FormLabel/component";
import FormInput from "../../FormInput/component";
import FormRadioCheck from "../../FormRadioCheck/component";

const initialState = {
  firstname: "",
  lastname: "",
  emailAddress: "",
  username: "",
  password: "",
  acceptTerms: "",
};

class SignUpForm extends React.Component {
  render() {
    return (
      <FormContainer initialValues={initialState}>
        {({ values, handleChange }) => (
          <form>
            <fieldset>
              <legend>
                <strong>Sign up form</strong>
              </legend>

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
                <FormLabel htmlFor="lastname" classNames="label">
                  Lastname
                </FormLabel>
                <FormInput
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={values.lastname}
                  handleChange={handleChange}
                  classNames="input"
                />
              </div>

              <div className="formControl">
                <FormLabel htmlFor="emailAddress" classNames="label">
                  Email address
                </FormLabel>
                <FormInput
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={values.emailAddress}
                  handleChange={handleChange}
                  classNames="input"
                />
              </div>

              <div className="formControl">
                <FormLabel htmlFor="username" classNames="label">
                  Username
                </FormLabel>
                <FormInput
                  type="text"
                  id="username"
                  name="username"
                  value={values.username}
                  handleChange={handleChange}
                  classNames="input"
                />
              </div>

              <div className="formControl">
                <FormLabel htmlFor="password" classNames="label">
                  Password
                </FormLabel>
                <FormInput
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  handleChange={handleChange}
                  classNames="input"
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
          </form>
        )}
      </FormContainer>
    );
  }
}

export default SignUpForm;
