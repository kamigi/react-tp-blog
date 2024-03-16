/**
 * Get the current time in the format HH:MM:SS.
 * @returns {string} The current time in HH:MM:SS format.
 */
export const getTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}
export default getTime;