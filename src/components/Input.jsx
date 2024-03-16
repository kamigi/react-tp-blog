import propTypes from 'prop-types'
import { clsx } from 'clsx';
import { useId } from 'react';
import Label from './Label';
/**
 * Functional component for rendering an input element with optional label and text.
 * @param {Object} props - The props object containing input configuration.
 * @param {React.Ref} props.inputRef - Reference to the input element.
 * @param {React.Ref} props.wrapperRef - Reference to the wrapper element.
 * @param {React.Ref} props.labelRef - Reference to the label element.
 * @param {string} props.type - Type of input element (e.g., text, checkbox, textarea).
 * @param {'top'|'bot'} props.label - Position of the label relative to the input element (top or bot).
 * @param {string} props.text - Text to display as label element children.
 * @param {string} props.className - CSS classes to use for the input element
 * @param {Function} props.onChange - Callback function to trigger on user changes
 * @param {Object} props.options - Additional options to be spread onto the input element.
 * @returns JSX element displaying the requested input element
 */
export const Input = props => {
    const { inputRef: ref, wrapperRef, labelRef, type, label, text, className, onChange, ...options} = props;
    options.id = useId();
    if(type === "checkbox") {
        options.className = clsx('btn-check', className)
        if(!options.autoComplete) options.autoComplete="off";
    } else {
        options.className = clsx('form-control', className)
    }
    
    if(onChange) options.onChange = e => onChange?.(onChangeMgr(e, options));

    const BuiltInput = type === "textarea" ? <textarea ref={ref} {...options} /> : <input ref={ref} type={type} {...options} />;

    if(text) {
        return <div ref={wrapperRef}>
            {label === "top" && <Label ref={labelRef} htmlFor={options.id}>{text}</Label>}
            {BuiltInput}
            {label === "bot" && <Label ref={labelRef} htmlFor={options.id}>{text}</Label>}
        </div>
    }

    return BuiltInput;
}
Input.propTypes = {
    inputRef: propTypes.object,
    wrapperRef: propTypes.object,
    labelRef: propTypes.object,
    type: propTypes.string,
    label: propTypes.oneOf(['top', 'bot']),
    text: propTypes.string,
    className: propTypes.string,
    onChange: propTypes.func
}
Input.defaultProps = {
    inputRef: null,
    type: 'text',
    label: "top",
    className: null,
    onChange: null
}
/**
 * Manage and return value depends on input type (text : string, checked: boolean, range: number)
 * @param {React.ChangeEvent} e 
 * @param {{type: string, checked: boolean, value: string|number }} options 
 * @returns {boolean|string|number} value
 */
function onChangeMgr(e, options) {
    if(options?.checked) return e.target.checked;
    if(options.type === 'range' && !isNaN(Number(e.target.value))) return Number(e.target.value);
    return e.target.value;
}
export default Input;