import { construct } from "core-js/fn/reflect";
import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderMembers = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Member
      </button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        >
          X
        </button>
        <h4>Member #{index + 1}</h4>
        <div className="row">
          <Field
            name={`${member}.firstName`}
            type="text"
            component={renderField}
            label="First Name"
          />
          <Field
            name={`${member}.lastName`}
            type="text"
            component={renderField}
            label="Last Name"
          />
        </div>
      </li>
    ))}
  </ul>
);

const handleTekan = (params) => {
  console.log(params);
};



const FieldArraysForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="members" component={renderMembers} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>

        <label>Name</label>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
          className="form-control"
        />

        <button onClick={handleTekan}>Tekan</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "fieldArrays", // a unique identifier for this form
  validate,
})(FieldArraysForm);
