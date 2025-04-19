import React from "react";
import styles from './edit.module.css';

function Edit(props) {
    const {onClick} = props
    
    return (
        <div className={styles.button__box}>
            <button onClick={onClick} className={styles.button__edit}>Edit</button>
            <button className={styles.button__delete}>Delete</button>
        </div>
    );
}

export default Edit;