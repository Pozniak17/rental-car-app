'use client';
import { Field, Form, Formik } from 'formik';
import css from './FilterForm.module.css';
import { useId } from 'react';

const FilterForm = () => {
  const fieldId = useId();

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor={`${fieldId}-carbrand`}>
            Car brand
          </label>
          <Field
            className={css.input}
            id={`${fieldId}-carbrand`}
            type="text"
            name="brand"
            as="select"
          >
            <option value="">Choose a brand</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Bentley">Bentley</option>
            <option value="Buick">Buick</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Chrysler">Chrysler</option>
            <option value="GMC">GMC</option>
          </Field>
        </div>

        <div className={css.wrapper}>
          <label className={css.label} htmlFor={`${fieldId}-price`}>
            Price/ 1 hour
          </label>
          <Field className={css.input} id={`${fieldId}-price`} type="text" name="price" as="select">
            <option value="">Choose a price</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
          </Field>
        </div>

        <div className={css.wrapper}>
          <label className={css.label} htmlFor={`${fieldId}-mileage`}>
            Сar mileage / km
          </label>
          <div>
            <Field
              className={css.inputFrom}
              id={`${fieldId}-mileage`}
              type="text"
              placeholder="From"
              name="mileageFrom"
            />
            <Field className={css.inputTo} type="text" placeholder="To" name="mileageTo" />
          </div>
        </div>
        <button className={css.btn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default FilterForm;
