import { getSingleCar } from '@/lib/api';
import { IoLocationOutline } from 'react-icons/io5';
import { CiCircleCheck } from 'react-icons/ci';
import { BsCalendar2Week, BsCarFront, BsFuelPump } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';
import Image from 'next/image';
import css from './page.module.css';
import DetailForm from '@/components/DetailForm/DetailForm';

type Props = {
  params: Promise<{ id: string }>;
};

const CarDetails = async ({ params }: Props) => {
  const { id } = await params;
  const car = await getSingleCar(id);
  console.log(car);

  return (
    <div className={css.container}>
      <div className={css.leftWrapper}>
        <Image
          src={car.img}
          alt={car.description}
          loading="eager"
          width="640"
          height="512"
          className={css.img}
        />

        <DetailForm />
      </div>

      <div className={css.infoWrapper}>
        <h1 className={css.title}>
          {car.brand} {car.model}, {car.year}
        </h1>

        <div className={css.textWrapper}>
          <p className={css.iconWrapper}>
            <IoLocationOutline size="16" /> {car.address.split(' ')[3]} {car.address.split(' ')[4]}
          </p>
          <p>Mileage: {car.mileage} km</p>
        </div>
        <p className={css.price}>${car.rentalPrice}</p>
        <p className={css.description}>{car.description}</p>
        <h2 className={css.subtitle}>Rental Conditions:</h2>
        <ul className={css.list}>
          {car.rentalConditions.map((item, idx) => (
            <li className={css.item} key={idx}>
              <CiCircleCheck />
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <h2 className={css.subtitle}>Car Specifications:</h2>
        <ul className={css.list}>
          <li>
            <p className={css.item}>
              <BsCalendar2Week />
              Year: {car.year}
            </p>
          </li>
          <li className={css.item}>
            <BsCarFront />
            <p>Type: {car.type}</p>
          </li>
          <li className={css.item}>
            <BsFuelPump />
            <p>Fuel Consumption: {car.fuelConsumption}</p>
          </li>
          <li className={css.item}>
            <GoGear />
            <p>Engine Size: {car.engineSize}</p>
          </li>
        </ul>

        <h2 className={css.subtitle}>Accessories and functionalities:</h2>
        <ul className={css.list}>
          {car.accessories.map((item, idx) => (
            <li className={css.item} key={idx}>
              <CiCircleCheck />
              <p>{item}</p>
            </li>
          ))}
          {car.accessories.map((item, idx) => (
            <li className={css.item} key={idx}>
              <CiCircleCheck />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;
