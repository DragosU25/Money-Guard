import React from "react";
import styles from "./TransactionsItem.module.css";

const TransactionItem = ({ transaction, onEdit, onDelete }) => {
  return (
    <li className={styles.transactionItem}>
      <span>{transaction.transactionDate}</span>
      <span>{transaction.type}</span>
      <span>{transaction.categoryId}</span>
      <span>{transaction.comment}</span>
      <span>{transaction.amount}</span>
      <button onClick={() => onEdit(transaction)}>Edit</button>
      <button onClick={() => onDelete(transaction.id)}>Delete</button>
    </li>
  );
};

export default TransactionItem;
