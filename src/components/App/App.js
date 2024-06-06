import React, { useState } from 'react';
import '../App/App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../utils/Yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (searchInput, location, sortOption) => {
    const businesses = await Yelp(searchInput, location, sortOption);
    setBusinesses(businesses);
  };


  return (
    <div className="App">
      <h1 className="header">Ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <div className="businessList">
        <BusinessList businesses={businesses}/>
      </div>
    </div>
  );
}

export default App;
