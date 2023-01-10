import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Option } from '../../types';
import AlertBanner from '../common/AlertBanner';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';

interface OptionProps {
  optionType: string;
}

const Options = ({ optionType }: OptionProps) => {
  const [items, setItems] = useState<Option[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get<Option[]>(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <AlertBanner />;
  }

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

  return <Row>{optionItems}</Row>;
};

export default Options;
