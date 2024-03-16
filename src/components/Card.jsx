import propTypes from 'prop-types'
import Button from './Button';
/**
 * Functional component that represents a card with an image, title, description, and optional button.
 * @param {{object}} props - The properties object containing image, title, description, href, and buttonLabel.
 * @returns JSX element representing the card.
 */
export const Card = props => {
    const { image, title, description, href, buttonLabel } = props;
    const showButton = !!(href && buttonLabel);
    return <div className="card">
        {image && <img src={image} className="card-img-top" alt="..." />}
        <div className="card-body">
            {title && <h5 className="card-title">{title.slice(0,20)}{title.length > 20 ? '...' : ''}</h5>}
            {description && <p className="card-text">{description.slice(0, 80)}{description.length > 80 ? '...' : ''}</p>}
            {showButton && <Button href={href}>{buttonLabel}</Button>}
        </div>
    </div>
}
Card.propTypes = {
    image: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    href: propTypes.string,
    buttonLabel: propTypes.string
}
Card.defaultProps = {
    image: null,
    title: null,
    description: null,
    href: null,
    buttonLabel: null
}
export default Card;