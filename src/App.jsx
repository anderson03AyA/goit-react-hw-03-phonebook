import React, { useState } from "react";
import "./App.css";
import Phonebook from "./components/Phonebook/Phonebook";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const addContact = (name, number) => {
    const newContact = { name, number };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const setAllContacts = (updatedContacts) => {
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <Phonebook
        contacts={contacts}
        onAddContact={addContact}
        onSetContacts={setAllContacts}
      />
    </div>
  );
}

export default App;
