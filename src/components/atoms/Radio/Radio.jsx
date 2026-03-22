import styles from './_Radio.module.scss';

export default function Radio({ htmlFor, id, name, text }) {
    return (
        <label className={`${styles.input_radio} `} htmlFor={htmlFor}>
            <input className={`${styles.input_radio__radio}`} type='radio' name={name} id={id} />
            <span className='text_preset_3  text_capitalize  text_slate--900'>{text}</span>
        </label>
    )
}