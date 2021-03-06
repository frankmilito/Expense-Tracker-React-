import React, {useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  })
  const titleChangeHandler = e => {
    setUserInput({
      ...userInput,
      title: e.target.value,
    })
  }
  const amountChangeHandler = e => {
    setUserInput({
      ...userInput,
      amount: e.target.value,
    })
  }
  const dateChangeHandler = e => {
    // let newDate = e.target.value
    // const data = new Date(newDate)
    const newDate = new Date(e.target.value)
    setUserInput({
      ...userInput,
      date: newDate,
    })
  }
  const submitHandler = e => {
    e.preventDefault()
    if (
      userInput.amount !== '' &&
      userInput.date !== '' &&
      userInput.title !== ''
    ) {
      setUserInput({
        title: '',
        amount: '',
        date: '',
      })
      props.saveExpense(userInput)
    }
  }
  return (
    <form onSubmit={submitHandler}>
      {isOpen? (
      <>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
      </>):(
        <div className="expense_actions">
        <button type="submit" onClick={()=>setIsOpen(!isOpen)}>Add expense</button>
      </div>
      
      )}
    </form>
  )
}

export default ExpenseForm
