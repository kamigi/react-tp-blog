import { useEffect, useState } from "react";
import { useSyncedRef } from "./useSyncedRef";
/**
 * Custom hook to fetch data from a given URL with the specified options.
 * @param {string} url - The URL to fetch data from.
 * @param {object} options - The options object for the fetch request.
 * @returns An object containing loading state, fetched data, error state, and a function to set data.
 */
export const useFetch = (url, options) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const optionsRef = useSyncedRef(options);
    useEffect(() => {
        fetch(url, {
            ...optionsRef.current,
            headers: {
                'Accept' : 'application/json; charset=utf-8',
                ...optionsRef.current?.headers,
            }
        })
        .then(r => {
            if(r.status === 200) { return r.json() }
            else throw new Error('Error Code: ' + r.status)
        })
        .then(d => {
            setData(d)
        })
        .catch(e => setError(e))
        .finally(() => setLoading(false));
    }, [url, optionsRef]);
    return { loading, data, error, setData }
}
export default useFetch;