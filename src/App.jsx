import ButtonRepayment from './components/atoms/Button/ButtonRepayment.jsx';
import ButtonReset from './components/atoms/Button/ButtonReset.jsx';
import Input from './components/atoms/Input/Input.jsx';
import MortgageTypeRadio from './components/molecules/MortgageTypeRadio/MortgageTypeRadio.jsx';

import './sass/main.scss';
import './sass/base/_base.scss';

export default function App() {

  return (
    <main>
      <div className='mortgage_repayment  container'>
        <div className="mortgage_repayment__calculator">
          <div className='mortgage_repayment__title'>
            <h1 className='mortgage_repayment__heading  text_preset_2  text_capitalize'>mortgage calculator</h1>
            <ButtonReset />
          </div>
          <Input label_text={'mortgage amount'} prefix_text={'£'} dir={'r'} />
          <Input label_text={'mortgage term'} prefix_text={'years'} />
          <Input label_text={'interest rate'} prefix_text={'%'} />
          <MortgageTypeRadio />
          <ButtonRepayment />
        </div>
      
        <div className="mortgage_repayment__result"></div>
      </div>
    </main>
  )
}