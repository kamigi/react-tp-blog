import { useEffect, useRef } from "react";
/**
 * Custom React hook that manages the document title based on the provided title value.
 * @param {string} title - The title to set for the document.
 * @returns None
 */
export const useDocumentTitle = (title) => {
    const titleRef = useRef(document.title);
    const noTitle = 'No Title set';
    useEffect(() => {
        const current = titleRef.current;
        return () => {
            current ? document.title = current : document.title = noTitle;
        }
    }, [])
    useEffect(() => {
        document.title = title ? title : titleRef.current;
    }, [title])
}
export default useDocumentTitle;