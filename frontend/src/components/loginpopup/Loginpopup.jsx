import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { assets } from '../../assets/assets';

const Loginpopup = ({ setshowlogin }) => {
  const [currstate, setcurrstate] = useState('Login');

  const validationSchema = Yup.object().shape({
    name: currstate === 'Sign Up' ? Yup.string().required('Required') : null,
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    terms: Yup.boolean().oneOf([true], 'Terms must be accepted'), // For the terms checkbox
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
    terms: false,
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{currstate}</h2>
                <img
                  onClick={() => setshowlogin(false)}
                  src={assets.cross_icon}
                  alt="Close"
                  className="cursor-pointer"
                />
              </div>
              {currstate === 'Sign Up' && (
                <>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </>
              )}
              <Field
                type="email"
                name="email"
                placeholder="Your E-mail"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-sm">
                  By continuing, I agree to terms of use and privacy policy
                </label>
                <ErrorMessage
                  name="terms"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                {currstate === 'Sign Up' ? 'Create Account' : 'Login'}
              </button>
              <div>
                {currstate === 'Login' ? (
                  <p>
                    Create a new account?{' '}
                    <span
                      onClick={() => setcurrstate('Sign Up')}
                      className="text-blue-500 cursor-pointer"
                    >
                      Click here
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <span
                      onClick={() => setcurrstate('Login')}
                      className="text-blue-500 cursor-pointer"
                    >
                      Login here
                    </span>
                  </p>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Loginpopup;
