import { useCallback, useState } from "react";
/**
 * Custom React hook that provides a boolean state value and a function to toggle that value.
 * @param {boolean} initial - The initial boolean value for the state (default is false).
 * @returns {[boolean, function]} An array containing the current state value and a function to toggle the state.
 */
export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(!state), [state])
  return [state, toggle];
}
export default useToggle;