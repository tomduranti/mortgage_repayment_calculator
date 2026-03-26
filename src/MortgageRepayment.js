

const MortgageRepayment = ({ setMortgage }) => {

    function setMortgageRepayment(data) {
        const totalMonths = data.mortgage_term * 12;
        const monthlyInterestRate = percentageToNumber(data.interest_rate) / 12;
        const power = Math.pow((1 + monthlyInterestRate), totalMonths);

        const totalRepayment = (stringToNumber(data.mortgage_amount) * monthlyInterestRate * power) / (power - 1)

        console.log(data)
        return (
            setMortgage({
                repayment: totalRepayment,
                interest: (totalRepayment * totalMonths) - stringToNumber(data.mortgage_amount),
                type: data.mortgage_type,
            })
        )
    }

    function stringToNumber(string) {
        return parseFloat(string.replaceAll(',', ''));
    }

    function percentageToNumber(number) {
        return number / 100;
    }

    function setNumberFormatInput(e) {
        return e.target.value = Number(e.target.value.replaceAll(',', '')).toLocaleString();
    }

    function setNumberFormat(string) {
        return Number(string).toLocaleString();
    }

    function resetState(state) {
        setMortgage(state);
        window.location.reload(false);
    }

    return {
        setMortgageRepayment,
        setNumberFormatInput,
        setNumberFormat,
        resetState,
    }
}

export default MortgageRepayment;