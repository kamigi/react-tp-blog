import propTypes from 'prop-types'
/**
 * Functional component that displays a message when a post is not found.
 * @param {{id: string}} props - The props object containing the id of the post.
 * @returns JSX element displaying a message for a post not found.
 */
export const PostNotFound = props => {
    const {id} = props;
    return <>
        <h1>Article Introuvable</h1>
        <p>
            L&apos;article avec l&apos;id &quot;{id}&quot; n&apos;existe pas.
        </p>
    </>
}
PostNotFound.propTypes = {
    id: propTypes.string.isRequired
}
export default PostNotFound;