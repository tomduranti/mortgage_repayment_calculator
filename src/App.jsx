import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';

import ButtonRepayment from './components/atoms/Button/ButtonRepayment.jsx';
import ButtonReset from './components/atoms/Button/ButtonReset.jsx';
import Input from './components/atoms/Input/Input.jsx';
import Radio from './components/atoms/Radio/Radio.jsx';
import EmptyIcon from './assets/illustration_empty.svg';
import MortgageRepayment from './MortgageRepayment.js';

import './sass/main.scss';
import styles from './sass/base/_Base.module.scss';

export default function App() {

  const initialState = {
    repayment: 0,
    total_repayment: 0,
    total_interest: 0,
    monthly_interest: 0,
    type: '',
  }

  const [mortgage, setMortgage] = useState(initialState);

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm();

  const {
    setMortgageRepayment,
    setNumberFormat,
  } = MortgageRepayment({ setMortgage, initialState });


  return (
    <main className={`${styles.page_wrapper}`}>
      <div className={`${styles.mortgage_repayment}`}>

        <div className={`${styles.mortgage_repayment__calculator}`}>
          <div className={`${styles.mortgage_repayment__title}`}>
            <h1 className='text_preset_2  text_capitalize  text_slate--900'>mortgage calculator</h1>
            <ButtonReset onClick={() => { reset({}, { keepErrors: false }), setMortgage(initialState) }} />
          </div>

          <form onSubmit={handleSubmit(setMortgageRepayment)} noValidate>

            <fieldset className={`${styles.form}`}>
              <legend className='hidden'>mortgage details</legend>
              <div>
                <Controller
                  name='mortgage_amount'
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label_text={'mortgage amount'}
                      prefix_text={'£'}
                      dir={'r'}
                      error={errors.mortgage_amount && true}
                    />
                  )}
                />
                {errors.mortgage_amount && <span className={`${styles.error} text_preset_5  text_red`}>{errors.mortgage_amount?.message}</span>}
              </div>
              <div>
                <Controller
                  name='mortgage_term'
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label_text={'mortgage term'}
                      prefix_text={'years'}
                      error={errors.mortgage_term && true}
                    />
                  )}
                />
                {errors.mortgage_term && <span className={`${styles.error} text_preset_5  text_red`}>{errors.mortgage_term?.message}</span>}
              </div>
              <div>
                <Controller
                  name='interest_rate'
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label_text={'interest rate'}
                      prefix_text={'%'}
                      error={errors.interest_rate && true}
                    />
                  )}
                />
                {errors.interest_rate && <span className={`${styles.error} text_preset_5  text_red`}>{errors.interest_rate?.message}</span>}
              </div>
              <div className={`${styles.form__radio}  text_slate--700`}>
                <h2 className='text_preset_4  text_capitalize'>mortgage type</h2>
                <Radio {...register('mortgage_type', {
                  required: 'This field is required'
                })}
                  id='repayment'
                  text='repayment'
                  value='repayment'
                />
                <Radio {...register('mortgage_type')}
                  id='interest_only'
                  text='interest only'
                  value='interest'
                />
                {errors.mortgage_type && <span className='text_preset_5  text_red'>{errors.mortgage_type?.message}</span>}
              </div>
            </fieldset>

            <ButtonRepayment />

          </form>

        </div>

        <div className={`${styles.mortgage_repayment__result}`}>
          <div className={`${styles.mortgage_repayment__container}`}>
            {mortgage.repayment ?
              (
                <>
                  <div>
                    <h3 className={`${styles.mortgage_repayment__heading} text_white  text_preset_2`}>Your results</h3>
                    <p className='text_slate--300  text_preset_4'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
                  </div>
                  <div className={`${styles.inbox}`}>

                    {mortgage.type === 'repayment' ? (
                      <div className={`${styles.inbox__details}`}>
                        <h4 className='text_preset_4  text_slate--300'>Your monthly repayments</h4>
                        <span className='text_preset_1  text_lime'>£{setNumberFormat(mortgage.repayment.toFixed(2))}</span>
                      </div>
                    ) : (
                      <div className={`${styles.inbox__details}`}>
                        <h4 className='text_preset_4  text_slate--300'>Your monthly interest</h4>
                        <span className='text_preset_1  text_lime'>£{setNumberFormat(mortgage.monthly_interest.toFixed(2))}</span>
                      </div>
                    )}

                    <span className='separator'></span>
                    <div className={`${styles.inbox__details}`}>
                      <h4 className='text_preset_4  text_slate--300'>Total you&apos;ll repay over the term</h4>
                      <span className='text_preset_2  text_white'>£{setNumberFormat(mortgage.total_repayment.toFixed(2))}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img className={`${styles.mortgage_repayment__icon}`} src={EmptyIcon} alt='' />
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