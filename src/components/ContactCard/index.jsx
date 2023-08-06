import styles from "./ContactCard.module.css";
import profile from "../../assets/icons/profile.svg";
import trash from "../../assets/icons/trash.svg";
import PropTypes from "prop-types";

export default function ContactCard(props) {
  const { id, name, phone, email } = props.contact;

  return (
    <section className={styles.container}>
      <div className={styles.photo}>
        <img src={profile} alt="pfp" />
      </div>
      <div className={styles.body}>
        <div className={styles.contactInfo}>
          <h2>{name}</h2>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
        <div className={styles.trashBtn}>
          <img
            src={trash}
            alt="trash"
            onClick={() => props.removeContact(id)}
          />
        </div>
      </div>
    </section>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  removeContact: PropTypes.func.isRequired,
};
