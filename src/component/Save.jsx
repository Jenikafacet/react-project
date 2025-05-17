import React from "react";
import styles from './save.module.css';

function Save(props) {
    const {onClick, onCancel, disabled} = props

    return (
        <div className={styles.button__box}>
            <button onClick={onClick} disabled={disabled} className={styles.button__save}>Save</button>
            <button onClick={onCancel} className={styles.button__cancel}>Canсel</button>
        </div>
    );
}

export default Save;
