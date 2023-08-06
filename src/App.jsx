import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContactList";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <main className="main">
      <div className="newContactBtn">
        <button onClick={() => setOpenModal(true)}>Add new contact</button>
      </div>
      <div className="title">
        <h1>Contact List</h1>
      </div>
      {openModal && (
        <Modal
          addContact={addContactHandler}
          close={() => setOpenModal(false)}
        />
      )}
      <div className="container">
        <ContactList contacts={contacts} removeContact={removeContactHandler} />
      </div>
    </main>
  );
}

export default App;
