

const MortgageRepayment = ({ setMortgage, initialState }) => {

    function setMortgageRepayment(data) {
        const totalMonths = data.mortgage_term * 12;
        const monthlyInterestRate = percentageToNumber(data.interest_rate) / 12;
        const power = Math.pow((1 + monthlyInterestRate), totalMonths);

        const monthlyRepayment = ((data.mortgage_amount) * monthlyInterestRate * power) / (power - 1)

        return (
            setMortgage({
                repayment: monthlyRepayment,
                total_repayment: monthlyRepayment * totalMonths,
                total_interest: (monthlyRepayment * totalMonths) - (data.mortgage_amount),
                monthly_interest: (data.mortgage_amount) * monthlyInterestRate,
                type: data.mortgage_type,
            })
        )
    }

    function percentageToNumber(number) {
        return number / 100;
    }

    function setNumberFormat(string) {
        return Number(string).toLocaleString();
    }

    function resetState() {
        localStorage.removeItem('mortgageData');
        setMortgage(initialState);  
    }

    return {
        setMortgageRepayment,
        setNumberFormat,
        resetState,
    }
}

export default MortgageRepayment;