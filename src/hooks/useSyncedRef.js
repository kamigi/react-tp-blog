import { useRef } from "react";
/**
 * Custom hook that creates a ref object to store and sync the provided data.
 * @param {any} data - The data to be stored in the ref object.
 * @returns {object} A ref object that stores and syncs the provided data.
 */
export const useSyncedRef = (data) => {
    const dataRef = useRef(data);
    dataRef.current = data;
    return dataRef;
}
export default useSyncedRef;