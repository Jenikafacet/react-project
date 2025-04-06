import React from "react";
import styles from './edit.module.css';

function Edit() {
    return (
        <div className={styles.button__box}>
            <button className={styles.button__edit}>Edit</button>
            <button className={styles.button__delete}>Delete</button>
        </div>
    );
}

export default Edit;