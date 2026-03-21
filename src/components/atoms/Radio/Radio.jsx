import styles from './_Radio.module.scss';

export default function Radio({ text }) {
    return (
        <label className={`${styles.input_radio} ` } htmlFor='radio'>
            <input className={`${styles.input_radio__radio}`} type='radio' name='radio' id='radio'/>
            <span className={`${styles.input_radio__label}  text_preset_3  text_capitalize`}>{text}</span>
        </label>
    )
}