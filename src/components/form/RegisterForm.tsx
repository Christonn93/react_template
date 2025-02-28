import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginForm from './LoginForm';
import ContactForm from './ContactForm';
import { registerInitialValues, registerSchema } from '@/utils/form';

const RegisterForm = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showContact, setShowContact] = useState(false);

  if (showLogin) return <LoginForm />;
  if (showContact) return <ContactForm />;

  return (
    <Formik
      initialValues={registerInitialValues}
      validationSchema={registerSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

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

          <div>
            <label>Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>

          <button type="submit">Register</button>
          <button
            type="button"
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Login
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

export default RegisterForm;
