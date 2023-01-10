import classes from './App.module.scss';
import Options from './pages/entry/Options';

function App() {
  return (
    <div className={classes.App}>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
}

export default App;
