import propTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
/**
 * Functional component for a modal dialog box.
 * @param {Object} props - The properties passed to the Modal component.
 * @param {Function} props.onClose - The callback function to close the modal.
 * @param {Object} properties - Additional properties to be spread on the dialog element.
 * @returns {JSX.Element} A dialog element representing the modal.
 */
export const Modal = props => {
    const { onClose, ...properties } = props;

    const dialogRef = useRef(null);
    useEffect(() => {
        dialogRef.current.showModal();
    }, [])

    const handleClose = (e) => {
        e.preventDefault();
        onClose?.()
    }

    return createPortal(<dialog 
        ref={dialogRef}
        onCancel={handleClose}
        onClose={handleClose}
        style={{width: 'calc(100vw - 2rem)', maxWidth: 600 }}
        {...properties}
    />, document.body);
}
Modal.propTypes = {
    onClose: propTypes.func
};
Modal.defaultProps = {
    onClose: null
};
export default Modal;