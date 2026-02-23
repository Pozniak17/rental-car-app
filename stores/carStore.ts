import { CarsListResponse } from '@/lib/api';
import axios from 'axios';
import { create } from 'zustand';
import { Car } from '@/lib/api';

interface CarStoreState {
  cars: Car[];
  selectedCar: Car | null;
  loading: boolean;
  error: string | null;
  fetchCars: () => Promise<void>;
}

const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const useCarStore = create<CarStoreState>(set => ({
  cars: [],
  selectedCar: null,
  loading: false,
  error: null,

  fetchCars: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get<CarsListResponse>('/cars');
      set({ cars: response.data.cars, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Якщо сталася помилка, зберігаємо її повідомлення і вимикаємо завантаження
      set({ error: 'Помилка завантаження', loading: false });
    }
  },

  //   fetchCarById: async (id: string) => {
  //     set({ loading: true, error: null, selectedCar: null });
  //     try {
  //       const response = await api.get<Car>(`/cars/${id}`);
  //       set({ selectedCar: response.data, loading: false });
  //       // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  //     } catch (error: any) {
  //       set({ error: 'Не вдалося знайти автомобіль', loading: false });
  //     }
  //   },
}));
