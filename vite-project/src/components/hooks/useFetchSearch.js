import { useState, useEffect } from 'react';

const useFetchSearch = (searchTerm) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost/calenderbackend/public/api/activities/search?name=${searchTerm}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        if (searchTerm) {
            fetchData();
        }
    }, [searchTerm]);

    return { data, loading, setData, setLoading };
};

export default useFetchSearch;