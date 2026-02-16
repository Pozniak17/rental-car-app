import { getSingleCar } from '@/lib/api';
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
      <div></div>
    </div>
  );
};

export default CarDetails;
