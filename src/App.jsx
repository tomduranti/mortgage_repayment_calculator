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

  const initialState = {
    repayment: 0,
    total_interest: 0,
    monthly_interest: 0,
    type: '',
  }

  const [mortgage, setMortgage] = useState(initialState);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const {
    setMortgageRepayment,
    setNumberFormatInput,
    setNumberFormat,
    resetState,
  } = MortgageRepayment({ setMortgage });


  return (
    <main className='page_wrapper'>
      <div className='mortgage_repayment'>

        <div className="mortgage_repayment__calculator">
          <div className='mortgage_repayment__title'>
            <h1 className='text_preset_2  text_capitalize'>mortgage calculator</h1>
            <ButtonReset onClick={() => resetState(initialState)} />
          </div>

          <form onSubmit={handleSubmit(setMortgageRepayment)} className="form">
            <Input {...register('mortgage_amount')}
              onInput={setNumberFormatInput}
              label_text={'mortgage amount'}
              prefix_text={'£'}
              dir={'r'} />
            {/* {errors.mortgage_amount && <span>{errors.mortgage_amount.message}</span>} */}
            <Input {...register('mortgage_term', { valueAsNumber: true, required: true })}
              label_text={'mortgage term'}
              prefix_text={'years'} />
            {/* {errors.mortgage_term && <span>{errors.mortgage_term.message}</span>} */}
            <Input {...register('interest_rate', { valueAsNumber: true, required: true })}
              label_text={'interest rate'}
              prefix_text={'%'} />
            {/* {errors.interest_rate && <span>{errors.interest_rate.message}</span>} */}
            <div className='form__radio  text_slate--700'>
              <h2 className='text_preset_4  text_capitalize'>mortgage type</h2>
              <Radio {...register('mortgage_type')} htmlFor='repayment' id='repayment' text='repayment' value='repayment' />
              <Radio {...register('mortgage_type')} htmlFor='interest_only' id='interest_only' text='interest only' value='interest' />
            </div>
            <ButtonRepayment />
          </form>

        </div>

        <div className='mortgage_repayment__result'>
          <div className="mortgage_repayment__container">
            {mortgage.repayment ?
              (
                <>
                  <div>
                    <h3 className='mortgage_repayment__heading  text_white  text_preset_2'>Your results</h3>
                    <p className='text_slate--300  text_preset_4'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
                  </div>
                  <div className="inbox">

                    {mortgage.type === 'repayment' ? (
                      <div className='inbox__details'>
                        <h4 className='text_preset_4  text_slate--300'>Your monthly repayments</h4>
                        <span className='text_preset_1  text_lime'>£{setNumberFormat(mortgage.repayment.toFixed(2))}</span>
                      </div>
                    ) : (
                      <div className='inbox__details'>
                        <h4 className='text_preset_4  text_slate--300'>Your monthly interest</h4>
                        <span className='text_preset_1  text_lime'>£{setNumberFormat((mortgage.monthly_interest).toFixed(2))}</span>
                      </div>
                    )}

                    <span className='separator'></span>
                    <div className='inbox__details'>
                      <h4 className='text_preset_4  text_slate--300'>Total you'll repay over the term</h4>
                      <span className='text_preset_2  text_white'>£{setNumberFormat((mortgage.total_interest + mortgage.repayment).toFixed(2))}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img className='mortgage_repayment__icon' src={EmptyIcon} alt='' />
                  <h3 className='text_white  text_preset_2  text_center'>Results shown here</h3>
                  <p className='text_slate--300  text_preset_4  text_center'>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
                </>
              )
            }

          </div>


        </div>

      </div>
    </main>
  )
}