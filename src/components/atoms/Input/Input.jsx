import styles from './_Input.module.scss';
import { NumericFormat } from 'react-number-format';

export default function Input({ label_text, prefix_text, dir, error, ...field }) {
    return (
        <>
            <label htmlFor='input'>
                <span className={`${styles.label__text}  text_preset_4  text_capitalize  text_slate--700`}>{label_text}</span>
                <div className={`${styles.input_number} ${error && styles['input_number--error']}  text_preset_3`}>
                    <NumericFormat
                        value={field.value ?? ''}
                        id='input'
                        thousandSeparator
                        onValueChange={values => field.onChange(values.floatValue)}
                        className={`${styles.input_number__input} ${dir === 'r' && 'flex_order_right'}`}
                        required
                    />
                    <span className={`${styles.input_number__prefix} ${styles['input_number__prefix--bg_lime']} ${error ? styles['input_number__prefix--error'] : 'text_slate--700'}`}>{prefix_text}</span>
                </div>
            </label>
        </>
    )
}