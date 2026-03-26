import { useForm } from 'react-hook-form';
import { useState } from 'react';

import ButtonRepayment from './components/atoms/Button/ButtonRepayment.jsx';
import ButtonReset from './components/atoms/Button/ButtonReset.jsx';
import Input from './components/atoms/Input/Input.jsx';
import Radio from './components/atoms/Radio/Radio.jsx';
import EmptyIcon from './assets/illustration_empty.svg';
import MortgageRepayment from './MortgageRepayment.js';

import './sass/main.scss';
import './sass/base/_base.scss';

export default function App() {

  const [mortgage, setMortgage] = useState({
    repayment: 0,
    interest: 0,
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const {
      setMortgageRepayment,
      setNumberFormat,
  } = MortgageRepayment({setMortgage});

  return (
    <main className='page_wrapper'>
      <div className='mortgage_repayment'>

        <div className="mortgage_repayment__calculator">
          <div className='mortgage_repayment__title'>
            <h1 className='mortgage_repayment__heading  text_preset_2  text_capitalize'>mortgage calculator</h1>
            <ButtonReset />
          </div>

          <form onSubmit={handleSubmit(setMortgageRepayment)} className="form">
            <Input {...register('mortgage_amount')}
              onInput={setNumberFormat}
              label_text={'mortgage amount'}
              prefix_text={'£'}
              dir={'r'} />
            {errors.mortgage_amount && <span>{errors.mortgage_amount.message}</span>}
            <Input {...register('mortgage_term', { valueAsNumber: true })}
              label_text={'mortgage term'}
              prefix_text={'years'} />
            {errors.mortgage_term && <span>{errors.mortgage_term.message}</span>}
            <Input {...register('interest_rate', { valueAsNumber: true })}
              label_text={'interest rate'}
              prefix_text={'%'} />
            {errors.interest_rate && <span>{errors.interest_rate.message}</span>}
            <div className='form__radio  text_slate--700'>
                <h2 className='text_preset_4  text_capitalize'>mortgage type</h2>
                <Radio {...register('mortgage_type')} htmlFor='repayment' id='repayment' text='repayment' value='repayment' />
                <Radio {...register('mortgage_type')}  htmlFor='interest_only' id='interest_only' text='interest only' value='interest' />
            </div>
            <ButtonRepayment />
          </form>

        </div>

        <div className='mortgage_repayment__result'>
          <div className="mortgage_repayment__container">
            <img className='mortgage_repayment__icon' src={EmptyIcon} alt='' />
            <h3 className='text_white  text_preset_2'>Results shown here</h3>
            <p className='text_slate--300  text_preset_4'>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
          </div>

          {<div className='text_white'>{mortgage.repayment.toFixed(2)}</div>} 
          {<div className='text_white'>{mortgage.interest.toFixed(2)}</div>}

        </div>
      
      </div>
    </main>
  )
}