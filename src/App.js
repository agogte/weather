import './App.css';
import Search from './Components/Search';
import CurrentWeather from './Components/CurrentWeather';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
