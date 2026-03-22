import style from './ButtonRepayment.module.scss';
import '../../../sass/abstract/_utils.scss';
import calculatorImg from '../../../assets/icon_calculator.svg'

export default function ButtonRepayment() {
    return (
        <button className={`${style.button_repayment}  text_preset_3  text_capitalize  text_slate--900`} type='button'>
            <img className={style.button_repayment__image} src={calculatorImg} alt=''/>
            calculate repayments
            </button>
    )
}