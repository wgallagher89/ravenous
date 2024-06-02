import React from 'react';
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
    const renderSearchOptions = () => {
        return Object.keys(searchByOptions).map((searchByOption) => {
            let searchByOptionValue = searchByOptions[searchByOption];
            return <li key={searchByOptionValue}>{searchByOption}</li>;
        }); 
    };
    return (
        <div className={styles.searchBar}>
            <div className={styles.sortArea}>
                <ul>{renderSearchOptions()}</ul>
            </div>
            <div className={styles.inputArea}>
                <input 
                    name="searchBusinesses"
                    placeholder="Search Businesses"
                    type="text"
                />
                <input 
                    name="where"
                    placeholder="Where?"
                    type="text"
                />
            </div>
            <div>
                <button className={styles.searchButton} type="submit">Find Your Spot</button>
            </div>
        </div>
    )
};

export default SearchBar;