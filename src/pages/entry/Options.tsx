import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Flavors } from '../../types';
import ScoopOptions from './ScoopOptions';

interface OptionProps {
  optionType: string;
}

const Options = ({ optionType }: OptionProps) => {
  const [items, setItems] = useState<Flavors[]>();
  useEffect(() => {
    axios
      .get<Flavors[]>(`http://localhost:3030/${optionType}`)
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
  });

  return <Row>{optionItems}</Row>;
};

export default Options;
