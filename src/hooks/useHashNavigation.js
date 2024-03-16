import { useEffect, useState } from "react";
/**
 * A custom React hook that enables hash-based navigation within a single-page application.
 * It listens for changes in the URL hash and updates the state accordingly.
 * @returns An object containing the current page and parameter extracted from the hash.
 */
export const useHashNavigation = () => {
    const [hash, setHash] = useState(location.hash);
    useEffect(() => {
        const handleHashChange = () => {
            console.log(location);
            setHash(location.hash)
        }
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        }
    }, [])
    const { page, param } = parseHash(hash)
    return { 
        page, param
    }
}
/**
 * Parses a hash string into a page and parameter object.
 * @param {string} hash - The hash string to parse.
 * @returns An object with 'page' and 'param' properties.
 */
function parseHash(hash) {
    const [ page, param ] = hash.replace('#', '').toLowerCase().split(':')
    return { page: page === '' ? 'home' : page, param }
}
export default useHashNavigation;