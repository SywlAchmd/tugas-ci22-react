import styles from "./TextField.module.css";
import { useState } from "react";
import propTypes from "prop-types";

export default function TextField(props) {
  const { placeholder, onChange, errorMsg, value } = props;
  const [showErrorMsg, setShowErrorMsg] = useState(true);
  const trimmedValue = value.trim();

  const handleEmptyInput = () => {
    if (trimmedValue === "") {
      setShowErrorMsg(true);
    } else {
      setShowErrorMsg(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleEmptyInput}>
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </form>
      {showErrorMsg && trimmedValue <= 0 && (
        <div className={styles.emptyAlert}>{errorMsg}</div>
      )}
    </div>
  );
}

TextField.propTypes = {
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  errorMsg: propTypes.string,
};
