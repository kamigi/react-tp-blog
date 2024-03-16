/**
 * Functional component that renders a loading spinner while data is being loaded.
 * @returns {JSX.Element} A div element containing a spinner icon and a visually hidden loading text.
 */
export const Loading = () => {
    return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading Data...</span>
    </div>
}
export default Loading