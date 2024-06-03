import React, { useState } from 'react';
import styles from '../SearchBar/SearchBar.module.css';

//curl --request GET \
//--url 'https://api.yelp.com/v3/businesses/search?location=san%20diego&term=mexican&sort_by=review_count&limit=20' \
//--header 'accept: application/json'

const baseUrl = 'https://api.yelp.com/v3/businesses/search'
const searchByOptions = {
    "Best Match": '?sort_by=best_match&limit=10',
    "Rating": '?sort_by=rating&limit=10',
    "Review Count": '?sort_by=review_count&limit=10'
}

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const [location, setLocation] = useState('');
    const [sortOption, setSortOption] = useState({});

    function getSearchByClass (searchByOption) {
        if (sortOption === searchByOption) {
            return styles.active;
        }
        return '';
    };

    function handleSortOptionChange(searchByOptionValue) {
        setSortOption(searchByOptionValue);
    };

    function handleSearchInputUpdate(event) {
        setSearchInput(event.target.value);
    };

    function handleLocationUpdate(event) {
        setLocation(event.target.value);
    };

    function handleSubmitSearch(event) {
        event.preventDefault();
        alert(`Searching Yelp with ${searchInput}, ${location}, ${sortOption}`);
    };

    const renderSearchOptions = () => {
        return Object.keys(searchByOptions).map((searchByOption) => {
            let searchByOptionValue = searchByOptions[searchByOption];
            return (
                <li 
                    className={getSearchByClass(searchByOptionValue)}
                    onClick={() => {handleSortOptionChange(searchByOptionValue)}} 
                    key={searchByOptionValue} 
                >    
                    {searchByOption}
                </li>
            );
        }); 
    };

    return (
        <form onSubmit={handleSubmitSearch} className={styles.searchBar}>
            <div className={styles.sortArea}>
                <ul>{renderSearchOptions()}</ul>
            </div>
            <div className={styles.inputArea}>
                <input 
                    name="searchBusinesses"
                    value={searchInput}
                    placeholder="Search Businesses"
                    type="text"
                    onChange={handleSearchInputUpdate}
                />
                <input 
                    name="where"
                    value={location}
                    placeholder="Where?"
                    type="text"
                    onChange={handleLocationUpdate}
                />
            </div>
            <div>
                <button className={styles.searchButton} type="submit">Find Your Spot</button>
            </div>
        </form>
    )
};

export default SearchBar;