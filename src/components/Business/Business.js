import React from 'react';
import styles from '../Business/Business.module.css';

function Business(props) {
    return (
        <div className={styles.business}>
            <img src={props.business.imageSrc}/>
            <h2>{props.business.name}</h2>
            <div className={styles.addressBlock}>
                <p>{props.business.address}</p>
                <p>{props.business.city}</p>
                <p>{props.business.state}</p>
                <p>{props.business.zipCode}</p>
            </div>
            <div className={styles.reviewBlock}>
                <h3>{props.business.category}</h3>
                <p>Rating: {props.business.rating}</p>
                <p>{props.business.reviewCount} Reviews</p>
            </div>
        </div>
    )
};

export default Business;