import { Col } from 'react-bootstrap';
import { Option } from '../../types';

const ToppingOptions = ({ name, imagePath }: Option) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="text-center">
      <img
        className="w-75"
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
    </Col>
  );
};

export default ToppingOptions;
