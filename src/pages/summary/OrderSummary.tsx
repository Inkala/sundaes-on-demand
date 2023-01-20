import SummaryForm from './SummaryForm';
import { useOrderDetails } from '../../context/OrderDetails';
import { formatCurrency } from '../../utilities';

const OrderSummary = () => {
  const { totals, optionCounts } = useOrderDetails();

  const scoopArray = Object.entries(optionCounts.scoops);
  const scoopsList = scoopArray.map(([key, value]) => (
    <li key={key}>{`${value} ${key}`}</li>
  ));

  const toppingsArray = Object.keys(optionCounts.toppings);
  const toppingsList = toppingsArray.map((key) => <li key={key}>{key}</li>);

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopsList}</ul>
      <h2>Toppings: {formatCurrency(totals.scoops)}</h2>
      <ul>{toppingsList}</ul>
      <SummaryForm />
    </div>
  );
};

export default OrderSummary;
