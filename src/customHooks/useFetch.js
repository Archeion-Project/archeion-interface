import { useEffect, useState } from 'react';

export function useFetch(route, options = {}) {
    const url = "http://127.0.0.1:8000/api/" + route;

    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(({ data }) => {
                setValue(data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [url]);

    return { isLoading, value, error };
}
