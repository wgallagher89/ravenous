import logo from './logo.svg';
import '../App/App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <h1 className="header">Ravenous</h1>
      <SearchBar />
      <div className="businessList">
        <BusinessList />
      </div>
    </div>
  );
}

export default App;
