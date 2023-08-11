// import package from npm
import PropTypes from "prop-types";

// import assets
import profile from "../../assets/icons/profile.svg";
import trash from "../../assets/icons/trash.svg";

// import styles
import styles from "./ContactCard.module.css";

export default function ContactCard(props) {
  const { contact: {id, name, phone, email}, removeContact } = props;

  return (
    <section className={styles.container}>
      <header className={styles.photo}>
        <img src={profile} alt="pfp" />
      </header>
      <main className={styles.body}>
        <section className={styles.contactInfo}>
          <h2>{name}</h2>
          <p>{phone}</p>
          <p>{email}</p>
        </section>
        
        <section className={styles.trashBtn}>
          <img
            src={trash}
            alt="trash"
            onClick={() => removeContact(id)}
          />
        </section>
      </main>
    </section>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  removeContact: PropTypes.func.isRequired,
};
