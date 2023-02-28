import ContactListItem from "components/ContactListItem/ContactListItem";
import { List } from "components/ContactList/ContactList.styled";
import { useSelector } from "react-redux";
import { getFilteredContacts } from "redux/selectors";

export default function ContactList() {
    const contacts = useSelector(getFilteredContacts);
  return (
    <>
      <List>
        {contacts.map((contact) => {
          return (
            <ContactListItem
              key={contact.id}
              contact={contact}
            />
          );
        })}
      </List>
    </>
  );
}
