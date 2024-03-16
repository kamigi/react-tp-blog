import propTypes from 'prop-types'
import { clsx } from 'clsx';
/**
 * Functional component for rendering a button element.
 * @param {Object} props - The props object containing variant, className, and other options.
 * @param {"primary" | "secondary" | "info" | "warning" | "danger" | "light" | "dark"} props.variant
 * @param {string} props.href - set a link tag (\<a /\>) instead of button tag (\<button /\>)
 * @returns JSX button|a element with the specified variant and class name.
 */
export const Button = props => {
    const { variant, className, ...options } = props;
    options.className = clsx(`btn btn-${variant}`, className);
    const Tag = options.href ? 'a' : 'button';
    return <Tag {...options} />;
}
Button.propTypes = {
    variant: propTypes.oneOf(["primary", "secondary", "info", "warning", "danger", "light", "dark"]),
    href: propTypes.string,
    className: propTypes.string
}
Button.defaultProps = {
    variant: "primary",
    className: null,
    href: null
}
export default Button;