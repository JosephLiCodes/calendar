import './grouped.css';
import calendarGrouped from './CalendarNoText.svg';
function GroupedCal() {
  return (
    <div className="Calendar">
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <header className="App-header">
           <img src={calendarGrouped} className = "calGroup" />
           <h1 className = "calText">WDC Calendar</h1>
      </header>
    </div>
  );
}

export default GroupedCal;
