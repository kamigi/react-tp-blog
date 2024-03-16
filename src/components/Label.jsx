import propTypes from 'prop-types'
import {clsx} from "clsx";
/**
 * Functional component for rendering a label element with specified props.
 * @param {Object} props - The props object containing type, className, and other options.
 * @param {string} props.type - The type of label element.
 * @param {string} props.className - The class name for the label element.
 * @param {Object} props.options - Additional options to be spread onto the label element.
 * @returns JSX label element with the specified props.
 */
export const Label = props => {
    const { type, className, ...options } = props;
    options.className = clsx('form-label', setClassName(type), className);
    
    return <label {...options} />;
}
Label.propTypes = {
    type: propTypes.string,
    className: propTypes.string
}
Label.defaultProps = {
    type: null,
    className: null
}

/**
 * Determines and returns the appropriate class name based on the input type.
 * @param {string} type - The type of input element.
 * @returns {string} - The class name corresponding to the input type.
 */
const setClassName = (type) => {
    if(["checkbox", "radio"].indexOf(type) !== -1 ) return "btn btn-outline-primary";
    return '';
}

export default Label;