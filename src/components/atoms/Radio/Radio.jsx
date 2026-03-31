import styles from './_Radio.module.scss';

export default function Radio({ htmlFor, id, text, ...inputProp }) {
    return (
        <label className={`${styles.input_radio} text_preset_3  text_capitalize  text_slate--900`}
            htmlFor={htmlFor}>
            <input className={`${styles.input_radio__radio}`}
                {...inputProp}
                type='radio'
                id={id}
                />
            {text}
        </label>
    )
}