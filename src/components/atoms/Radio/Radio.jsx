import styles from './_Radio.module.scss';

export default function Radio({ htmlFor, id, text }) {
    return (
        <label className={`${styles.input_radio} `} htmlFor={htmlFor}>
            <input className={`${styles.input_radio__radio}`} type='radio' name='radio' id={id} />
            <span className={`${styles.input_radio__label}  text_preset_3  text_capitalize`}>{text}</span>
        </label>
    )
}