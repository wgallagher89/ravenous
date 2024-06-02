import '../App/App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import img from '../Business/Breakfast-Burritos-1700x1272.jpg';

const fakeBusiness = {
    imageSrc: img,
    name: 'Bewitching Breakfast Burritos',
    address: '1034 W Lime Blvd',
    city: 'San Diego',
    state: 'CA',
    zipCode: '92101',
    category: 'Mexican',
    rating: 4.6,
    reviewCount: 88
};

const businessArray = [fakeBusiness, fakeBusiness, fakeBusiness, fakeBusiness, fakeBusiness, fakeBusiness];

function App() {
  return (
    <div className="App">
      <h1 className="header">Ravenous</h1>
      <SearchBar />
      <div className="businessList">
        <BusinessList businesses={businessArray}/>
      </div>
    </div>
  );
}

export default App;
