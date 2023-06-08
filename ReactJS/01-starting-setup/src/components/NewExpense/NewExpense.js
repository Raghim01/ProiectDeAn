import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setFormState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHedler(expenseData);
    setFormState(false);
  };

  const startEditingHandler = () => {
    setFormState(true);
  };

  const stopEditingHandler = () => {
    setFormState(false);
  };

  //initial const [isEditing, setFormState] = useState(false);
  //is editing starea initiala, adica false
  //dupa, initializez un Handler :const startEditingHandler = () => {
  //   setFormState(true);
  // };
  // care cand ii facem trigger, adica buttonul Add New Expense
  // seteaza isEditing ca true

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}{" "}
    </div>
  );
};

export default NewExpense;
