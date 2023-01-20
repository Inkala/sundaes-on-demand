import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { pricePerItem } from '../../constants';
import { Option, OptionTotals } from '../../utilities/types';
import { formatCurrency } from '../../utilities';
import AlertBanner from '../common/AlertBanner';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';
import { useOrderDetails } from '../../context/OrderDetails';

interface OptionProps {
  optionType: string;
}

const Options = ({ optionType }: OptionProps) => {
  const [items, setItems] = useState<Option[]>();
  const [error, setError] = useState(false);
  const { totals } = useOrderDetails();

  useEffect(() => {
    axios
      .get<Option[]>(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <AlertBanner />;
  }

  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items?.map((item) => {
    if (optionType === 'scoops') {
      return (
        <ScoopOptions
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        />
      );
    }
    if (optionType === 'toppings') {
      return (
        <ToppingOptions
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        />
      );
    }
  });

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType as keyof OptionTotals])}</p>
      <p>
        {title} total:{' '}
        {formatCurrency(totals[optionType as keyof OptionTotals])}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
};

export default Options;
