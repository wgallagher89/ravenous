import React from 'react';
import img from '../../images/Breakfast-Burritos-1700x1272.jpg';
import styles from '../Business/Business.module.css';

function Business({ business }) {
    return (
        <div className={styles.business}>
            <img src={business.imageSrc}/>
            <h2>{business.name}</h2>
            <div className={styles.addressBlock}>
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state}</p>
                <p>{business.zipCode}</p>
            </div>
            <div className={styles.reviewBlock}>
                <h3>{business.category}</h3>
                <p>Rating: {business.rating}</p>
                <p>{business.reviewCount} Reviews</p>
            </div>
        </div>
    )
};

export default Business;