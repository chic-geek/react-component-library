import React from "react";
import FormContainer from "../../FormContainer/component";
import FormLabel from "../../FormLabel/component";
import FormInput from "../../FormInput/component";

const initialState = {
  username: "",
  password: "",
};

class SignInForm extends React.Component {
  render() {
    return (
      <FormContainer initialValues={initialState}>
        {({ values, handleChange }) => (
          <form>
            <fieldset>
              <legend>
                <strong>Sign in form</strong>
              </legend>

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
                  type="text"
                  id="password"
                  name="password"
                  value={values.password}
                  handleChange={handleChange}
                  classNames="input"
                />
              </div>
            </fieldset>
          </form>
        )}
      </FormContainer>
    );
  }
}

export default SignInForm;
