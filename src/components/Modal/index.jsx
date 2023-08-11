// import from react and package from npm
import { useState } from "react";
import propTypes from "prop-types";

// import components
import TextField from "../TextField";

// import assets
import CloseBtn from "../../assets/icons/x.svg";

// import styles
import styles from "./Modal.module.css";

export default function Modal(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { close: closeModal, addContact } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
      alert("Please fill out all fields")
      return;
    }
    addContact({ name, phone, email });
    closeModal();
  };

  return (
    <div className={styles.overlay}>
      <section className={styles.container}>
        <header className={styles.modalHeader}>
          <h1>Create a new contact</h1>
          <img src={CloseBtn} alt="close-button" onClick={closeModal} />
        </header>
        <main className={styles.modalBody}>
          <TextField
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            errorMsg={"Name cannot be empty"}
          />
          <TextField
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            errorMsg={"Phone cannot be empty"}
          />
          <TextField
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMsg={"Email cannot be empty"}
          />
          <button onClick={handleSubmit}>Submit</button>
        </main>
      </section>
    </div>
  );
}

Modal.propTypes = {
  close: propTypes.func.isRequired,
  addContact: propTypes.func.isRequired,
};
