import { Car } from '@/lib/api';
import css from './CarItem.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  item: Car;
};

const CarItem = ({ item }: Props) => {
  console.log(item.address.split(' ')[3]);
  return (
    <li className={css.card}>
      <Image
        className={css.image}
        src={item.img}
        alt={item.brand}
        loading="eager"
        width="276"
        height="268"
      />
      <div className={css.wrapper_title}>
        <h2 className={css.title}>
          {item.brand} <span className={css.accent}>{item.model}</span>, {item.year}
        </h2>
        <h2 className={css.title}>{item.rentalPrice}$</h2>
      </div>
      <div className={css.wrapper_support}>
        <div className={css.wrapper_support_second}>
          <p className={css.test}>
            {item.address.split(' ')[3].slice(0, item.address.split(' ')[3].length - 1)}
          </p>
          <p className={css.test}>{item.rentalCompany}</p>
        </div>
        <div className={css.wrapper_support_second}>
          <p>{item.type}</p>
          <p>{item.mileage}</p>
        </div>
        <Link href={`/catalog/${item.id}`} className={css.linkButton}>
          Read more
        </Link>
      </div>
    </li>
  );
};

export default CarItem;
