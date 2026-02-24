import CarsList from '@/components/CarList/CarList';
import FilterForm from '@/components/FilterForm/FilterForm';
import css from './page.module.css';

const Catalog = () => {
  return (
    <section className={css.section}>
      <FilterForm />
      <CarsList />
    </section>
  );
};

export default Catalog;
