import { contactInitialValues, contactSchema } from '@/utils/form';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
  return (
    <Formik
      initialValues={contactInitialValues}
      validationSchema={contactSchema}
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
            <label>Message</label>
            <Field as="textarea" name="message" />
            <ErrorMessage name="message" component="div" />
          </div>

          <button type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
