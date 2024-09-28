import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const ContactForm = (addContact) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    options.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <Field name="name" className={s.input} placeholder="Введіть ім'я" />
        </label>

        <label className={s.label}>
          <span>Number</span>
          <Field
            name="number"
            className={s.input}
            placeholder="Введіть номер"
          />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
