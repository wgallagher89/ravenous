import React from 'react';
import styles from '../SearchBar/SearchBar.module.css';

//curl --request GET \
//--url 'https://api.yelp.com/v3/businesses/search?location=san%20diego&term=mexican&sort_by=review_count&limit=20' \
//--header 'accept: application/json'
const baseUrl = 'https://api.yelp.com/v3/businesses/search'

const sort = {
    best_match: 'https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=10',
    rating: 'https://api.yelp.com/v3/businesses/search?sort_by=rating&limit=10',
    review_count: 'https://api.yelp.com/v3/businesses/search?sort_by=review_count&limit=10'
}

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <div className={styles.sortArea}>
                <button>Best Match</button>
                <button>Highest Rated</button>
                <button>Most Reviewed</button>
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