

const MortgageRepayment = ({setMonthlyRepayment}) => {



    function setMortgageRepayment(data) {
        const monthlyInterestRate = percentageToNumber(data.interest_rate) / 12;
        const power = Math.pow((1 + monthlyInterestRate), data.mortgage_term * 12);
        return setMonthlyRepayment(
            stringToNumber(data.mortgage_amount) * monthlyInterestRate * power / (power - 1)
        )
    }

    function stringToNumber(string) {
        return parseFloat(string.replaceAll(',', ''));
    }

    function percentageToNumber(number) {
        return number / 100;
    }

    function setNumberFormat(e) {
        const newNumber = Number(e.target.value.replaceAll(',', ''));
        return e.target.value = newNumber.toLocaleString();
    }


    return {
        setMortgageRepayment,
        setNumberFormat,
    }
}

export default MortgageRepayment;