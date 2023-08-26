import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onDeleteTransaction = id => {
    const {historyList} = this.state
    const updatedTransactionList = historyList.filter(each => each.id !== id)
    this.setState({historyList: updatedTransactionList})
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onOptionChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onAddBtn = event => {
    event.preventDefault()
    const {amount, optionId, title} = this.state
    const type = transactionTypeOptions.find(each => each.optionId === optionId)
    const {displayText} = type
    const newTransaction = {
      id: v4(),
      title,
      amount,
      type: displayText,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, newTransaction],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {historyList} = this.state
    let expenseAmount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenseAmount += parseInt(each.amount)
      }
      return expenseAmount
    })
  }

  getIncome = () => {
    const {historyList} = this.state
    let incomeAmount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(each.amount)
      }
      console.log(incomeAmount)
      return incomeAmount
    })
  }

  getBalance = () => {
    const {historyList} = this.state
    let incomeAmount = 0
    let expenseAmount = 0
    let balanceAmount = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(each.amount)
      } else {
        expenseAmount += parseInt(each.amount)
      }
      balanceAmount = incomeAmount - expenseAmount
      return balanceAmount
    })
  }

  render() {
    const {title, amount, optionId, historyList} = this.state
    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpenses()
    const balanceAmount = this.getBalance()
    return (
      <div>
        <div>
          <h1>Hi,Richard</h1>
          <p>Welcome,back to your Money Manager</p>
        </div>
        <div>
          <MoneyDetails
            incomeAmount={incomeAmount}
            balanceAmount={balanceAmount}
            expenseAmount={expenseAmount}
          />
        </div>
        <div>
          <form onSubmit={this.onAddBtn}>
            <label htmlFor="TITLE">TITLE</label>
            <input
              type="text"
              onChange={this.onTitleChange}
              value={title}
              id="TITLE"
              placeholder="TITLE"
            />
            <label htmlFor="AMOUNT">AMOUNT</label>
            <input
              type="text"
              onChange={this.onAmountChange}
              value={amount}
              id="AMOUNT"
              placeholder="AMOUNT"
            />
            <select onChange={this.onOptionChange} value={optionId}>
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
        </div>
        <div>
          <h1>History</h1>
          <p>Title</p>
          <p>Amount</p>
          <p>Type</p>
          <ul>
            {historyList.map(each => (
              <TransactionItem
                key={each.id}
                transactionDetails={each}
                onDeleteTransaction={this.onDeleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
