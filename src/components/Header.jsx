import propTypes from 'prop-types'
import activeIf from '../tools/classtools';
/**
 * Functional component for the header of the website.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.page - The current page of the website.
 * @returns {JSX.Element} A navigation bar with links to different sections of the website.
 */
export const Header = props => {
    const { page } = props;
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Mon Blog</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a {...activeIf(page==='home', page, "nav-link")} href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a {...activeIf(page==='contact', page, "nav-link")} href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
};
Header.propTypes = {
    page: propTypes.string.isRequired,
};
export default Header;