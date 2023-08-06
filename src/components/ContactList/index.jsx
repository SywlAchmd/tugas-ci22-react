import ContactCard from "../ContactCard";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

export default function ContactList(props) {
  const removeContact = (id) => {
    props.removeContact(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        removeContact={removeContact}
      />
    );
  });

  return (
    <div
      className={`${styles.contactList} ${
        renderContactList.length === 0 ? styles.emptyBackground : ""
      }`}
    >
      {renderContactList}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  removeContact: PropTypes.func.isRequired,
};
