import { Controller } from 'react-hook-form';

import styles from './_RadioGroup.module.scss';
import '../../../sass/abstract/_utils.scss';

import Radio from '../../atoms/Radio/Radio.jsx';

export default function RadioGroup({control}) {
    return (
        <Controller
            name="radio_group"
            control={control}
            render={({ field }) => (
            <div className={`${styles.mortgage_type_radio}  text_slate--700`}>
                <h2 className='text_preset_4  text_capitalize'>mortgage type</h2>
                <Radio {...field} htmlFor='repayment' id='repayment' text='repayment' value='repayment' />
                <Radio {...field} htmlFor='interest_only' id='interest_only' text='interest only' value='interest' />
            </div>
        )}></Controller>
    )
}