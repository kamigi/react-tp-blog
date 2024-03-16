/**
 * Determines if an element should be active based on a condition.
 * @param {boolean} condition - The condition to check for activation.
 * @param {string} page - The page to set as active.
 * @param {string} [className=''] - The class name to apply to the element.
 * @returns An object containing the className and aria-current attributes based on the condition.
 */
export const activeIf = (condition, page, className='') => {
    if(!condition) return { className: className };
    return { className: `${className} active`,'aria-current':page }
}
export default activeIf;