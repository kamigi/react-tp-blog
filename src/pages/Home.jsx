import useDocumentTitle from "../hooks/useDocumentTitle";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import PostsList from "./Home/PostsList";
/**
 * Functional component representing the home page of the blog.
 * Sets the document title to the specified title using the useDocumentTitle hook.
 * Renders the page title and the list of posts.
 * @returns JSX element containing the home page content.
 */
export const Home = () => {
    const title = "Mon Blog";
    useDocumentTitle(title);
    return <>
        <h1 className="mb-3">{title}</h1>
        {RenderPosts()}
    </>;
}
/**
 * Renders the posts based on the data fetched from the specified URL.
 * @returns JSX element - Either a loading indicator, a list of posts, or an error alert.
 */
function RenderPosts() {
    const {loading, data, error}= useFetch('https://jsonplaceholder.typicode.com/posts?_limit=20&_delay=2000')
    if(loading) return <Loading />;
    if(data) return <PostsList data={data} />;
    if(error) return <Alert type="danger" >{error.toString()}</Alert>;
}

export default Home;