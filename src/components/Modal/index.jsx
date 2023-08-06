import { useState } from "react";
import styles from "./Modal.module.css";
import CloseBtn from "../../assets/icons/x.svg";
import propTypes from "prop-types";
import TextField from "../TextField";

export default function Modal(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
      return;
    }
    props.addContact({ name, phone, email });
    props.close();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.modalHeader}>
          <h1>Create a new contact</h1>
          <img src={CloseBtn} alt="close-button" onClick={props.close} />
        </div>
        <div className={styles.modalBody}>
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
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  close: propTypes.func.isRequired,
  addContact: propTypes.func.isRequired,
};
