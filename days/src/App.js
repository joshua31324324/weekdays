import './App.css';
import dayChecker from "./utils/dayChecker";

function App() {
  // Call the dayChecker function to get the current day
  const {day, link, image, title} = dayChecker();
  const today = {day, link, image, title};
  const todayNumber = new Date().getDay() + 1;
  let suffix;
  switch (todayNumber) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }
  return (
    <div className="App">
      <header className="App-left">
        <img src={today.image} alt="Weekday" title={today.title} />
      </header>
      <div className="App-right">
      <h1>Today is {today.day}!</h1>
      <p>{today.day} is the {todayNumber}{suffix} day of the week. Would you like to know more? <a href={today.link}>Click here.</a></p>
      </div>
      <footer className="App-footer">
        <p>Created by Joshua Oppong | © 2025 | All rights reserved.</p>
        <p><a href="mailto:jeoppong14@gmail.com">Contact Me!</a></p>
        <p><a href="https://github.com/joshua31324324/weekdays" target="_blank" rel="noreferrer">Source Code</a></p>
      </footer>
    </div>
  );
}

export default App;
