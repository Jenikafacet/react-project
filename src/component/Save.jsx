import React from "react";
import styles from './save.module.css';

function Save() {
    return (
        <div className={styles.button__box}>
            <button className={styles.button__save}>Save</button>
            <button className={styles.button__cancel}>Canсel</button>
        </div>
    );
}

export default Save;
