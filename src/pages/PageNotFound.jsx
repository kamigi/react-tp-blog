import propTypes from 'prop-types'
/**
 * Functional component for displaying a "Not Found" message.
 * @param {object} props - The props object containing the page information.
 * @param {string} props.page - The attempted page number
 * @returns JSX element displaying a "Page Not Found" message with the requested page name.
 */
export const PageNotFound = props => {
    const {page} = props;
    return <>
        <h1>Page Introuvable</h1>
        <p>
            La page demandée &quot;{page}&quot; n&apos;existe pas.
        </p>
    </>
}
PageNotFound.propTypes = {
    page: propTypes.string.isRequired
}
PageNotFound.defaultProps = {
    page: null
}
export default PageNotFound;