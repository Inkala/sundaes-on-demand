import { Container } from 'react-bootstrap';

import { OrderDetailsProvider } from './context/OrderDetails';
import OrderEntry from './pages/entry/OrderEntry';

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
      {/* <div className={classes.App}>
        <Options optionType="scoops" />
        <Options optionType="toppings" />
      </div> */}
    </Container>
  );
}

export default App;
