import './App.css';
import Card from './component/Card';
import Dropbox from './component/Dropbox';
import {WeatherProvider} from './context/WeatherContext';



function App() {
  return (
    <WeatherProvider>
      <Dropbox/>
      <Card/>
    </WeatherProvider>
  );
}

export default App;
