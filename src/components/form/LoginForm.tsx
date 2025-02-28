import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import RegisterForm from './RegisterForm';
import ContactForm from './ContactForm';
import { loginInitialValues, loginSchema } from '@/utils/form';

const LoginForm = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showContact, setShowContact] = useState(false);

  if (showRegister) return <RegisterForm />;
  if (showContact) return <ContactForm />;

  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Login</button>
          <button
            type="button"
            onClick={() => {
              setShowRegister(true);
            }}
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => {
              setShowContact(true);
            }}
          >
            Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
