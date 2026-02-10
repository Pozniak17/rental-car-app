import { Car } from '@/lib/api';
import CarItem from '../CarsItem/CarItem';
import css from './CarList.module.css';

type Props = {
  cars: Car[];
};

const CarsList = ({ cars }: Props) => {
  return (
    <ul className={css.list}>
      {cars.map(car => (
        <CarItem key={car.id} item={car}></CarItem>
      ))}
    </ul>
  );
};

export default CarsList;
