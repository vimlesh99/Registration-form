/** @format */

import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./Valid";

const initialValues = {
  name: "",
  email: "",
  password: "",
  conform_password: "",
};
const Registration = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    validationSchema:signUpSchema,
    initialValues: initialValues,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  //  console.log(formik);

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            autoComplete="off"
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            your name
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            autoComplete="off"
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            autoComplete="off"
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            conform Password
          </label>
          <input
            autoComplete="off"
            type="password"
            className="form-control"
            name="conform_password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.conform_password}
            id="exampleInputPassword2"
          />
        </div>
        <div className="mb-3 htmlForm-check">
          <input
           
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
