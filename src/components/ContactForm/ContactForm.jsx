import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
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

  const re = /^[1-9]\d{2}-\d{2}-\d{2}/;

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімальна кількість символів - 3")
      .max(50, "максимальна кількість символів - 50")
      .required("Це поле обов'язкове!"),
    number: Yup.string()
      .matches(re, "Введіть в форматі 000-00-00")
      .required("Це поле обов'язкове!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={orderSchema}
    >
      <Form className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <Field name="name" className={s.input} placeholder="Ім'я Призвіще" />
          <ErrorMessage name="name" component="p" className={s.error} />
        </label>

        <label className={s.label}>
          <span>Number</span>
          <Field name="number" className={s.input} placeholder="000-00-00" />
          <ErrorMessage name="number" component="p" className={s.error} />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
