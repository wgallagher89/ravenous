import React from 'react';
import Business from '../Business/Business';
import styles from "./BusinessList.module.css";

function BusinessList() {
    return (
        <div className={styles.businessList}>
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    )
};

export default BusinessList;