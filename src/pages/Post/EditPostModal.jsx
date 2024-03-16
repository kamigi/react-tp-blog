import propTypes from 'prop-types';
import { useState } from 'react';
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Button from '../../components/Button';
import Alert from '../../components/Alert';
/**
 * Functional component for editing a post within a modal.
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.post - The post object to be edited.
 * @param {Function} props.onClose - The function to close the modal.
 * @param {Function} props.onSave - The function to save the edited post.
 * @returns {JSX.Element} A modal for editing a post.
 */
export const EditPostModal = props => {

    const { post, onClose, onSave } = props;
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        const data = new FormData(e.target);
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: data
        })
        .then(r => {
            if(r.status === 200) { return r.json() }
            else throw new Error('Error Code: ' + r.status)
        })
        .then(() => {
            onSave(Object.fromEntries(data.entries()));
        })
        .catch(e => setError(e))
        .finally(() => setLoading(false));
    };

    return <Modal onClose={onClose}>
        <div className="form-control">
            <h1>Editer l&apos;article</h1>
            {error && <Alert type='danger'>{error.toString()}</Alert>}
            <form action="" onSubmit={handleSubmit} className='vstack gap-3'>
                <Input name='title' text="Titre" defaultValue={post.title} />
                <Input name='body' type="textarea" text="Contenu" rows={8} defaultValue={post.body} />
                <div className='hstack gap-2 justify-content-end'>
                    <Button disabled={loading} type="submit" variant='secondary' onClick={onClose}>Annuler</Button>
                    <Button disabled={loading} type="submit">Sauvegarder</Button>
                </div>
            </form>
        </div>
    </Modal>
}
EditPostModal.propTypes = {
    post: propTypes.object,
    onClose: propTypes.func,
    onSave: propTypes.func
};
EditPostModal.defaultProps = {
    post: null,
    onClose: null,
    onSave: null
};
export default EditPostModal;