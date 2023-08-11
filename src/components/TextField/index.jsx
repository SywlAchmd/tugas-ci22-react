// import from react and package from npm
import { useState } from "react";
import propTypes from "prop-types";

// import styles
import styles from "./TextField.module.css";

export default function TextField(props) {
  const { placeholder, onChange, errorMsg, value } = props;
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const trimmedValue = value.trim();

  const handleEmptyInput = () => {
    if (trimmedValue === "") {
      setShowErrorMsg(true);
    } else {
      setShowErrorMsg(false);
    }
  };

  return (
    <section className={styles.wrapper}>
      <form>
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={handleEmptyInput}
        />
      </form>
      {showErrorMsg &&(
        <div className={styles.emptyAlert}>{errorMsg}</div>
      )}
    </section>
  );
}

TextField.propTypes = {
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  errorMsg: propTypes.string,
};
