import { useState } from "react";
import "./ExpenseForm.css";
import "./NewExpense";

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });

  //   //We use that when our state updates depends on the previous state
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       enteredTitle: event.target.value,
  //     };
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredAmount: event.target.value,
  //   // });

  //   //We use that when our state updates depends on the previous state
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       enteredAmount: event.target.value,
  //     };
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredDate: event.target.value,
  //   // });

  //   //We use that when our state updates depends on the previous state
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       enteredDate: event.target.value,
  //     };
  //   });
  // };

  const [enterTitle, setEnteredTitle] = useState("");
  const [enterAmount, setEnteredAmount] = useState("");
  const [enterDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(expenseData);
    // when we use here |onSaveExpenseData| we are using |saveExpenseDataHandler|
    // function, becouse we passing a pointer to this function trought onSaveExpenseData prop
    // that's hwo we use a function which is not declared in this class

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enterTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enterDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
