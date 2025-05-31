import styles from './edit.module.css';

function Edit(props) {
    const {onSave, deleteWord} = props;
    
    return (
        <div className={styles.button__box}>
            <button onClick={onSave} className={styles.button__edit}>Edit</button>
            <button onClick={deleteWord} className={styles.button__delete}>Delete</button>
        </div>
    );
}

export default Edit;