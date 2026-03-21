import Input from './Input';

export default {
    title: 'components/atoms/Input',
    component: Input,
}

export const MortgageAmount = {
    args: {
        label_text: 'mortgage amount',
        prefix_text: '£',
    }
}

export const MortgageTerm = {
    args: {
        label_text: 'mortgage term',
        prefix_text: 'years',
    }
}

export const InterestRate = {
    args: {
        label_text: 'interest rate',
        prefix_text: '%',
    }
}