import logo from './logo.svg';
import './App.css';
import dayChecker from "./utils/dayChecker";

function App() {
  // Call the dayChecker function to get the current day
  const {day, link, image} = dayChecker();
  const today = {day, link, image};
  const todayNumber = new Date().getDay();


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={today.image} className="App-logo" alt="logo" />
        <h1>Today is {today.day}!</h1>
      </header>
      <p>{today.day} is the {todayNumber}th day of the week. Would you like to know more? <a href={today.link}>Click here: </a></p>
    </div>
  );
}

export default App;
