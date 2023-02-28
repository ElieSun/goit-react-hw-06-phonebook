
import PropTypes from 'prop-types';
import { Item, Button } from 'components/ContactListItem/ContactListItem.styled'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export default function ContactListItem ({ contact }) {
    const dispatch = useDispatch();
    const handleDeleteContact = () => dispatch(deleteContact(contact.id));
        return (
            <>
                <Item>
                    <span>{contact.name}: {contact.number} </span>
                    <Button  type="button" onClick={handleDeleteContact}>Delete</Button>
                </Item>
            </>
        );
    }


ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};
