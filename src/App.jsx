import ButtonRepayment from './components/atoms/Button/ButtonRepayment.jsx';
import ButtonReset from './components/atoms/Button/ButtonReset.jsx';
import Input from './components/atoms/Input/Input.jsx';
import MortgageTypeRadio from './components/molecules/MortgageTypeRadio/MortgageTypeRadio.jsx';

import EmptyIcon from './assets/illustration_empty.svg';

import './sass/main.scss';
import './sass/base/_base.scss';

export default function App() {

  return (
    <main className='page_wrapper'>
      <div className='mortgage_repayment'>

        <div className="mortgage_repayment__calculator  container">
          <div className='mortgage_repayment__title'>
            <h1 className='mortgage_repayment__heading  text_preset_2  text_capitalize'>mortgage calculator</h1>
            <ButtonReset />
          </div>
          <div className="mortgage_repayment__input_group">
            <Input label_text={'mortgage amount'} prefix_text={'£'} dir={'r'} />
            <Input label_text={'mortgage term'} prefix_text={'years'} />
            <Input label_text={'interest rate'} prefix_text={'%'} />
            <MortgageTypeRadio />
          </div>
          <ButtonRepayment />
        </div>

        <div className='mortgage_repayment__result'>
          <div className="mortgage_repayment__container  container">
            <img className='mortgage_repayment__icon' src={EmptyIcon} alt='' />
            <h3 className='text_white  text_preset_2'>Results shown here</h3>
            <p className='text_slate--300  text_preset_4'>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
          </div>
        </div>

      </div>
    </main>
  )
}