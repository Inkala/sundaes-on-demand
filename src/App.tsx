import classes from './App.module.scss';
import Options from './pages/entry/Options';

function App() {
  return (
    <div className={classes.App}>
      <Options optionType="scoops" />
    </div>
  );
}

export default App;
