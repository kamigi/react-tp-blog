import propTypes from 'prop-types'
/**
 * Functional component to display a single post.
 * @param {object} props - The props object containing the post data.
 * @returns JSX element displaying the post title, image, and body.
 */
export const Single = props => {
    const { post } = props;
    return <>
        <h1 className="mb-3">{post.title}</h1>
        <img src={`https://picsum.photos/id/${post.id}/280/180`} alt="" className='img-fluid img-thumbnail my-3' />
        <p>{post.body}</p>
    </>
}
Single.propTypes = {
    post: propTypes.object.isRequired
}
Single.defaultProps = {
    post: null
}
export default Single;