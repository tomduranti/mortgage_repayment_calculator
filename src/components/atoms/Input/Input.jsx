import styles from './_Input.module.scss';

export default function Input({ label_text, prefix_text, dir }) {
    return (
        <div>
            <label className={`${styles.label}  text_preset_4  text_capitalize  text_slate--700`} htmlFor='number'>{label_text}</label>
            <div className={`${styles.input_number}  text_preset_3`}>
                <input className={`${styles.input_number__input} ${dir === 'r' ? 'flex_order_right' : ''}`} type='number' name='number' required/>
                <span className={`${styles.input_number__prefix}  text_slate--700`}>{prefix_text}</span>
            </div>
        </div>
    )
}