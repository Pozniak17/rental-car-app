'use client';
import { Field, Form, Formik } from 'formik';
import css from './DetailForm.module.css';

export default function DetailForm() {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <h3 className={css.title}>Book your car now</h3>
        <p className={css.text}>Stay connected! We are always ready to help you.</p>

        <div className={css.inputWrapper}>
          <Field className={css.input} placeholder="Name*" type="text" name="username" />

          <Field className={css.input} placeholder="Email*" type="email" name="email" />

          <Field className={css.input} placeholder="Booking date" type="text" name="data" />

          <Field
            className={css.inputText}
            placeholder="Comment"
            type="text"
            name="comment"
            as="textarea"
          />
        </div>

        <button className={css.btn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
}
