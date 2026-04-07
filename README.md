# Mortgage repayment calculator

### Project

App that calculates mortgage repayment over a period of time given a fixed interest.

### Screenshot

![](./_resources/mortgage_repayment_calculator.gif)

### Links

- Live Site URL: [Mortgage repayment calculator](https://tomduranti.github.io/mortgage_repayment_calculator/)

### Code highlights

- clean API from React libraries such as react-hook-form and react-number-format. Handle language specific currency rendering ($, £, €, etc.) while keeping the logic plain

- zero interest case handling: if a user has 0 interest, the numbers are shown as such in the UI and not as NaN or empty (default)

```
data.interest_rate > 0 ?
monthlyRepayment = ((data.mortgage_amount) * monthlyInterestRate * power) / (power - 1) :
monthlyRepayment = data.mortgage_amount / totalMonths; //if there is no interest
```
- high reusability of Input.jsx component thanks to bidirectional prefixing (dir={'r'}):

```
<Input
    {...field}
    label_text={'mortgage amount'}
    prefix_text={'£'}
    dir={'r'}
    error={errors.mortgage_amount && true}
/>
```

- use of modular sass styling

### Built with

- React
- Storybook
- Semantic HTML5
- Modular Sass
- CSS Grid
- BEM
- Responsive & adaptive design
- Mobile-first workflow
- Keyboard navigation