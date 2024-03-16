import useDocumentTitle from "../hooks/useDocumentTitle";
/**
 * Functional component that sets the document title to "Contact" using the useDocumentTitle hook.
 * @returns The string 'Contact'.
 */
export const Contact = () => {
    useDocumentTitle("Contact")
    return 'Contact';
}
export default Contact;