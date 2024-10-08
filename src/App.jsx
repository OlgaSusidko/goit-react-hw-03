import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("contacts")) ?? [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  const searchFilter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleChangeFilter = (e) => setFilter(e.target.value);

  const handleDeletContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const addContact = (contact) => {
    setContacts((prev) => {
      return [...prev, contact];
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList
        contacts={searchFilter}
        handleDeletContact={handleDeletContact}
      />
    </>
  );
}

export default App;
