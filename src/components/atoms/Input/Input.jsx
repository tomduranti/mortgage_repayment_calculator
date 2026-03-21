import styles from './_Input.module.scss';

export default function Input({ label_text, prefix_text, dir }) {
    return (
        <>
            <label className={`${styles.label}  text_preset_4  text_capitalize`} htmlFor='number'>{label_text}</label>
            <div className={`${styles.input_number}  text_preset_3`}>
                <span className={`${styles.input_number__prefix} ${dir === 'r' ? 'flex_order_right' : ''}`}>{prefix_text}</span>
                <input className={`${styles.input_number__input}`} type='number' name='number'/>
            </div>
        </>
    )
}