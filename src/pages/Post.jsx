import propTypes from 'prop-types'
import useFetch from "../hooks/useFetch";
import useToggle from '../hooks/useToggle'
import useDocumentTitle from '../hooks/useDocumentTitle';
import Loading from "../components/Loading";
import SinglePost from '../components/Single';
import PostNotFound from './PostNotFound';
import Button from '../components/Button'
import EditPostModal from './Post/EditPostModal';
/**
 * Functional component that displays a post and allows for editing.
 * @param {object} props - The properties passed to the component.
 * @param {string} props.id - The id of the post.
 * @returns JSX element that displays the post and editing options.
 */
export const Post = props => {
    const { id } = props;

    const {loading, data: post, error, setData }= useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    useDocumentTitle(post?.title)

    const [isEditing, toggleEditing] = useToggle(false);

    const handleSave = data => {
        setData({
            ...post,
            ...data
        })
        toggleEditing();
    }
        
    if(loading) return <Loading />;
    if(error) return <PostNotFound id={id}/>;

    return <>
        <SinglePost post={post} />
        {isEditing && <EditPostModal post={post} onClose={toggleEditing} onSave={handleSave}/>}
        <p><Button variant="danger" onClick={toggleEditing}>Editer</Button></p>
        <p><Button href={`/#post:${post.id+1}`} variant="secondary">Article suivant</Button></p>
    </>
}
Post.propTypes = {
    id: propTypes.string.isRequired,
}
export default Post;