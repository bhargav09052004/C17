// Write your code here
const MoneyDetails = props => {
  const {incomeAmount, balanceAmount, expenseAmount} = props
  return (
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <p>Your Balance</p>
        <p>Rs {balanceAmount}</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <p>Your Income</p>
        <p>Rs {incomeAmount}</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <p>Your Expenses</p>
        <p>Rs {expenseAmount}</p>
      </div>
    </div>
  )
}
export default MoneyDetails
