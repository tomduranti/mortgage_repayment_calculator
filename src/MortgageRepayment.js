

const MortgageRepayment = ({ setMortgage }) => {

    function setMortgageRepayment(data) {
        const totalMonths = data.mortgage_term * 12;
        const monthlyInterestRate = percentageToNumber(data.interest_rate) / 12;
        const power = Math.pow((1 + monthlyInterestRate), totalMonths);

        let monthlyRepayment = 0;

        data.interest_rate > 0 ?
        monthlyRepayment = ((data.mortgage_amount) * monthlyInterestRate * power) / (power - 1) :
        monthlyRepayment = data.mortgage_amount / totalMonths; //if there is no interest


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

    return {
        setMortgageRepayment,
        setNumberFormat,
    }
}

export default MortgageRepayment;