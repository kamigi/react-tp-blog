import propTypes from 'prop-types'
/**
 * Functional component for displaying an alert message.
 * @param {object} props - The properties passed to the Alert component.
 * @param {string} props.type - The type of alert (e.g., "info", "warning", "error").
 * @param {object} props.options - Additional options to be spread onto the alert div element.
 * @returns JSX alert component with the specified type and content.
 */
export const Alert = props => {
    const {type="info", ...options} = props;
    return <div className={`alert alert-${type}`} role="alert" {...options} />
}
Alert.propTypes = {
    type: propTypes.string
};
Alert.defaultProps = {
    type: 'info'
};
export default Alert;