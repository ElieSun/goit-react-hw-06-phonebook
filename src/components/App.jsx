
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from "./ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Phonebook, MainTitle, SubTitle } from "./App.styled";

export function App () {
    return (
      <Phonebook>
        <MainTitle>iPhoneBook &#63743;</MainTitle>
        <ContactForm/>
        <SubTitle>Contacts</SubTitle>
        <Filter/>
        <ContactList/>
      </Phonebook>
    );
    }
  