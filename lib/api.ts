import axios from 'axios';

export type Car = {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
};

export type CarsListResponse = {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
};

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const getCars = async () => {
  const res = await axios.get<CarsListResponse>('/cars');
  return res.data;
};

export const getSingleCar = async (id: string) => {
  const res = await axios.get<Car>(`/cars/${id}`);
  // console.log(res);
  return res.data;
};
