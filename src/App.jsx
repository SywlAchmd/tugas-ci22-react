// import from react and package from npm
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// import components
import ContactList from "./components/ContactList";
import Modal from "./components/Modal";

// import styles
import "./App.css";

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
      <section className="newContactBtn">
        <button onClick={() => setOpenModal(true)}>Add new contact</button>
      </section>

      <section className="title">
        <h1>Contact List</h1>
      </section>

      {openModal && (
        <Modal
          addContact={addContactHandler}
          close={() => setOpenModal(false)}
        />
      )}

      <section className="container">
        <ContactList contacts={contacts} removeContact={removeContactHandler} />
      </section>
    </main>
  );
}

export default App;
