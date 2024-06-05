const apiKey = process.env.REACT_APP_API_KEY;

const Yelp = async(term, location, searchBy) => {
    try {
        const response = await fetch(`http://localhost:3001/yelp/businesses/search?term=${term}&location=${location}&sort_by=${searchBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    accept: 'application/json',
                },
            },
        );
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.businesses.map((business) => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0]?.title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                };
            });
        }
        throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }

};

export default Yelp;