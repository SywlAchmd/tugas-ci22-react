// import package from npm
import PropTypes from "prop-types";

// import components
import ContactCard from "../ContactCard";

// import styles
import styles from "./ContactList.module.css";

export default function ContactList(props) {
  const { contacts, removeContact } = props;

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        removeContact={removeContact}
      />
    );
  });

  return (
    <main
      className={`${styles.contactList} ${
        renderContactList.length === 0 ? styles.emptyBackground : ""
      }`}
    >
      {renderContactList}
    </main>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  removeContact: PropTypes.func.isRequired,
};
