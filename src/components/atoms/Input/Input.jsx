import styles from './_Input.module.scss';
import { NumericFormat } from 'react-number-format';

export default function Input({ label_text, prefix_text, dir, error, ...field }) {
    return (
        <div>
            <label className={`${styles.label}  text_preset_4  text_capitalize  text_slate--700`} htmlFor='number'>{label_text}</label>
            <div className={`${styles.input_number} ${error ? 'input_number--error' : ''}  text_preset_3`}>
                <NumericFormat
                    value={123}
                    thousandSeparator
                    onValueChange={(values) => field.onChange(values.floatValue)}
                    className={`${styles.input_number__input} ${dir === 'r' ? 'flex_order_right' : ''}`}
                />
                <span className={`${styles.input_number__prefix} ${error ? 'input_number__prefix--error' : ''}  text_slate--700`}>{prefix_text}</span>
            </div>
        </div>
    )
}