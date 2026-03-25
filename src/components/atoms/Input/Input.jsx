import styles from './_Input.module.scss';

export default function Input({ label_text, prefix_text, dir, ...inputProp }) {
    //add custom function that displays comma in number after 3 digits
    return (
        <div>
            <label className={`${styles.label}  text_preset_4  text_capitalize  text_slate--700`} htmlFor='number'>{label_text}</label>
            <div className={`${styles.input_number}  text_preset_3`}>
                <input className={`${styles.input_number__input} ${dir === 'r' ? 'flex_order_right' : ''}`} {...inputProp} type='text' required />
                <span className={`${styles.input_number__prefix}  text_slate--700`}>{prefix_text}</span>
            </div>
        </div>
    )
}