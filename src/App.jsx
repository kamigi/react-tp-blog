import { ErrorBoundary } from "react-error-boundary"
import useHashNavigation from "./hooks/useHashNavigation"
import Header from "./components/Header"
import Home from "./pages/Home"
import Post from "./pages/Post"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Alert from "./components/Alert"
/**
 * Functional component representing the main App.
 * It uses hash navigation to determine the page and parameter.
 * Renders different components based on the page value.
 * @returns JSX element containing the header, main content, and footer components.
 */
export const App = () => {
  const { page, param } = useHashNavigation()
  return <>
    <Header page={page} />
    <ErrorBoundary FallbackComponent={Alert}>
      <div className="container my-3">
        {renderPage(page, param)}
      </div>
    </ErrorBoundary>
  </>
}
/**
 * Renders the appropriate component based on the given page and parameter.
 * @param {string} page - The page to render.
 * @param {string} param - The parameter to pass to the rendered component.
 * @returns The component to render based on the page and parameter.
 */
const renderPage = (page, param) => {
  switch(page) {
    case 'home': return <Home />
    case 'post': return <Post id={param}/>
    case 'contact': return <Contact />
    default: return <NotFound page={page}/>
  }
}
export default App