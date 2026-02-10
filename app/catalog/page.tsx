import CarsList from '@/components/CarList/CarList';
import { getCars } from '@/lib/api';

const Catalog = async () => {
  const response = await getCars();

  return <section>{response?.cars?.length > 0 && <CarsList cars={response.cars} />}</section>;
};

export default Catalog;
