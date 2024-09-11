import React from "react";
import TransactionItem from "../TransactionsItem/TransactionsItem";
import styles from "./TransactionsList.module.css";


const TransactionsList = ({ transactions, onEdit, onDelete }) => {
  return (
    <div className={styles.container}>
      <h2>Transactions List</h2>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
=======
import styles from "./TransactionsList.module.css";

export default function TransactionsList() {
  return <div className={styles.mainCont}>TransactionsList</div>;
}

