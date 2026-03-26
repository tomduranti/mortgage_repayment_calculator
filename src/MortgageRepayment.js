

const MortgageRepayment = ({setMortgage}) => {

    function setMortgageRepayment(data) {
        const totalMonths = data.mortgage_term * 12;
        const monthlyInterestRate = percentageToNumber(data.interest_rate) / 12;
        const power = Math.pow((1 + monthlyInterestRate), totalMonths);

        const totalRepayment = (stringToNumber(data.mortgage_amount) * monthlyInterestRate * power) / (power - 1)

        return (
            setMortgage({
                repayment: totalRepayment,
                interest: (totalRepayment * totalMonths) - stringToNumber(data.mortgage_amount),
            })
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