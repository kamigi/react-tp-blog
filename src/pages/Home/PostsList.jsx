import propTypes from 'prop-types'
import Card from '../../components/Card'
/**
 * Functional component that renders a list of posts in a grid layout.
 * @param {object} props - The properties passed to the component.
 * @param {array} props.data - An array of post objects to display.
 * @returns JSX element representing the list of posts in a grid layout.
 */
export const PostsList = props =>  {
    const { data } = props;
    return <div className="row gap-6">
            {data.map(post => (
                <div key={post.id} className="col-12 col-md-6 my-2">
                    <Card 
                        image={`https://picsum.photos/id/${post.id}/280/180`}
                        title={post.title}
                        description={post.body}
                        href={`/#post:${post.id}`}
                        buttonLabel="Voir l'article"
                    />
                </div>
            ))}
    </div>
}
PostsList.propTypes = {
    data: propTypes.array.isRequired
}
PostsList.defaultProps = {
    data: null
}
export default PostsList;