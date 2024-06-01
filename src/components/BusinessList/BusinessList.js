import React from 'react';
import Business from '../Business/Business';
import img from '../../images/Breakfast-Burritos-1700x1272.jpg';
import styles from '../BusinessList/BusinessList.module.css';

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

const tempArray = [];
for (let i = 0; i < 10; i++) {
    tempArray.push(fakeBusiness);
};

function BusinessList() {
    const businessList = tempArray.map((business) => {
        return <Business business={business}/>;
    });
    return businessList;
};

export default BusinessList;