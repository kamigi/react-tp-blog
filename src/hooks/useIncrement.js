import { useCallback, useState } from "react";
/**
 * Custom React hook that manages an incrementing count within specified bounds.
 * @param {object} props - The properties object containing base, min, and max values.
 * @param {number} [base=0] - The initial count value.
 * @param {number} [min=-Infinity] - The minimum value the count can reach.
 * @param {number} [max=Infinity] - The maximum value the count can reach.
 * @returns An object containing the current count value, increment and decrement functions.
 */
export const useIncrement = props => {
    const {base = 0, min = -Infinity, max = Infinity} = props;
    const [count, setCount] = useState(base);
    const increment = useCallback(() => setCount(c => c < max ? c + 1 : c), [max]);
    const decrement = useCallback(() => setCount(c => c > min ? c - 1 : c), [min]);
    return {count, increment, decrement};
}
export default useIncrement;