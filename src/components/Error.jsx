import propTypes from 'prop-types'
import Alert from "./Alert";
import Button from "./Button";
/**
 * Functional component that displays an error message and an optional reset button.
 * @param {object} props - The props object containing error and resetErrorBoundary.
 * @param {ErrorEvent} props.error - The error event
 * @param {Function} props.resetErrorBoundary - The reset Callback function
 * @returns JSX element displaying the error message and reset button if provided.
 */
export const Error = props => {
    const { error, resetErrorBoundary } = props;
    return <>
        <Alert type='danger'>
            <p>{error ? error.toString() : 'Unknown error' }</p>
            {resetErrorBoundary && <Button variant="secondary" onClick={resetErrorBoundary}>Reset</Button>}
        </Alert>
    </>
};
Error.propTypes = {
    error: propTypes.object,
    resetErrorBoundary: propTypes.func
}