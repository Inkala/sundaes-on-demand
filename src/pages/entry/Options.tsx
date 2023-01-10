import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Option } from '../../types';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';

interface OptionProps {
  optionType: string;
}

const Options = ({ optionType }: OptionProps) => {
  const [items, setItems] = useState<Option[]>();
  useEffect(() => {
    axios
      .get<Option[]>(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((err) => console.log('error:', err));
  }, []);

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
