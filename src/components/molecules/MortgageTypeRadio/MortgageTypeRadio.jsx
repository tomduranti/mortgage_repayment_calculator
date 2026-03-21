import styles from './_MortgageTypeRadio.module.scss';
import '../../../sass/abstract/_utils.scss';

import Radio from '../../atoms/Radio/Radio.jsx';

export default function MortgageTypeRadio() {
    return (
        <div className={`${styles.mortgage_type_radio}`}>
            <h2 className='text_preset_4  text_capitalize'>mortgage type</h2>
            <Radio htmlFor='repayment' id='repayment' text='repayment' />
            <Radio htmlFor='interest_only' id='interest_only' text='interest only' />
        </div>
    )
}