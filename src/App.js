import { useState } from 'react';
import './App.css';
import { TripList } from './components/TripList';

function App() {
  
  const [hideTrips, setHideTrips] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setHideTrips(false)}>Hide</button>
      {hideTrips && <TripList/>}
    </div>
  );
}

export default App;
