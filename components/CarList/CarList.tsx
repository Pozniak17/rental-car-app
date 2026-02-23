'use client';
import CarItem from '../CarsItem/CarItem';
import css from './CarList.module.css';

import { useEffect } from 'react';
import { useCarStore } from '@/stores/carStore';
import { Car } from '@/lib/api';

const CarsList = () => {
  const { cars, loading, error, fetchCars } = useCarStore();

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <ul className={css.list}>
      {cars.map((car: Car) => (
        <CarItem key={car.id} item={car}></CarItem>
      ))}
    </ul>
  );
};

export default CarsList;
