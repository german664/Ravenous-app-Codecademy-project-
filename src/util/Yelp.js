const apiKey = "voY-15d8gXmC2M3Sp87Tti3h38qCKiF1nJkZqVjrsj-v3ZeqzLVpXIANYunP4Zu-iHvrtUDISdsWTQPTr95kPRKNUm-JnFdPO8tXND6-11pOi4wE3QVJ5MBItDGKX3Yx";

export const Yelp = {
    search: async (term, location, sortBy) => {

        try {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            });
            const data = await response.json()
            return data.businesses.map((business) => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }
            })
            /*             if (response.ok) {
                            data.businesses.map((business) => {
                                return {
                                    id: business.id,
                                    imageSrc: business.image_url,
                                    name: business.name,
                                    address: business.location.address1,
                                    city: business.location.city,
                                    state: business.location.state,
                                    zipCode: business.location.zip_code,
                                    category: business.categories,
                                    rating: business.rating,
                                    reviewCount: business.review_count
                                }
                            })
                        } */


        }
        catch (error) {
            console.log(error)
        }

    }


};