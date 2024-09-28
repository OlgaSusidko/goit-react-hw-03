import Contact from "./Contact";

const ContactList = ({ contacts, handleDeletContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            handleDeletContact={handleDeletContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
