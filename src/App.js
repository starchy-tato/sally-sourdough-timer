import Header from "./components/Header";
import TimerInput from "./components/TimerInput";
import { useState } from "react"

function App() {
  const [feedStarterTime, setFeedStarterTime] = useState(null)

  //@ts-check
  const handleSetFeedStarterTime = (time) => {
    const datetime = new Date(time);
    const formattedTime = datetime.toLocaleTimeString()


    console.log(formattedTime);


    setFeedStarterTime(formattedTime)
  }

  return (
  <>
  <Header />
  <TimerInput value={feedStarterTime} handleSelectedTime={handleSetFeedStarterTime} />
  <p>Feed Starter at: {feedStarterTime}</p>
  </>
  );
}

export default App;
