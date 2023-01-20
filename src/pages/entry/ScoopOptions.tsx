import { ChangeEvent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Option } from '../../utilities/types';
import { useOrderDetails } from '../../context/OrderDetails';

const ScoopOptions = ({ name, imagePath }: Option) => {
  const { updateItemCount } = useOrderDetails();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    updateItemCount &&
    updateItemCount(name, parseInt(e.target.value), 'scoops');

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="text-center">
      <img
        className="w-75"
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group controlId={`${name}-count`} as={Row} className="mt-2">
        <Form.Label column xs="6" className="text-center">
          {name}
        </Form.Label>
        <Col xs="5" className="text-left">
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOptions;
