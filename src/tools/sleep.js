/**
 * Pauses the execution of the code for a specified amount of time.
 * @param {number} [ms=1000] - The number of milliseconds to sleep for.
 * @returns None
 */
export const sleep = (ms=1000) => {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire);
    return;
};
export default sleep;