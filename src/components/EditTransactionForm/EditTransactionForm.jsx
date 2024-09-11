import React from "react";
import styles from "./EditTransactionForm.module.css"; // Ensure the correct path

const EditTransactionForm = ({
  editTransaction,
  categories,
  onUpdate,
  onChange,
  setEditTransaction,
}) => {
  if (!editTransaction) {
    return null; // Don't render anything if there's no transaction to edit
  }

  const filteredCategories = categories.filter(
    (category) => category.type === editTransaction.type
  );

  return (
    <div className={styles.form}>
      <h2>Edit Transaction</h2>
      <input
        type="date"
        name="transactionDate"
        value={editTransaction.transactionDate}
        onChange={onChange}
      />
      <select
        name="type"
        value={editTransaction.type}
        onChange={(e) => {
          const newType = e.target.value;
          setEditTransaction((prev) => ({
            ...prev,
            type: newType,
            categoryId: "", // Reset category selection
          }));
        }}
      >
        <option value="INCOME">Income</option>
        <option value="EXPENSE">Expense</option>
      </select>
      <select
        name="categoryId"
        value={editTransaction.categoryId}
        onChange={onChange}
      >
        <option value="">Select Category</option>
        {filteredCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="amount"
        value={editTransaction.amount}
        onChange={onChange}
      />
      <input
        type="text"
        name="comment"
        value={editTransaction.comment}
        onChange={onChange}
      />
      <button onClick={() => onUpdate(editTransaction)}>
        Update Transaction
      </button>
    </div>
  );
};

export default EditTransactionForm;
