import React from 'react';
import styles from '../Business/Business.module.css';

import img from './Breakfast-Burritos-1700x1272.jpg';

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

function Business() {
    return (
        <div className={styles.business}>
            <img src={fakeBusiness.imageSrc}/>
            <h2>{fakeBusiness.name}</h2>
            <div className={styles.addressBlock}>
                <p>{fakeBusiness.address}</p>
                <p>{fakeBusiness.city}</p>
                <p>{fakeBusiness.state}</p>
                <p>{fakeBusiness.zipCode}</p>
            </div>
            <div className={styles.reviewBlock}>
                <h3>{fakeBusiness.category}</h3>
                <p>Rating: {fakeBusiness.rating}</p>
                <p>{fakeBusiness.reviewCount} Reviews</p>
            </div>
        </div>
    )
};

export default Business;