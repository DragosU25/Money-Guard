import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  fetchTransactionCategories,
} from "../../redux/transactions/operationsTransactions";
import EditTransactionForm from "../EditTransactionForm/EditTransactionForm";
import TransactionList from "../TransactionsList/TransactionsList";
import { toast } from "react-toastify";
import ModalAddTransaction from "../ModalAddTransaction/ModalAddTransaction";
import styles from "./TransactionsManager.module";

const TransactionsManager = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);
  const categories = useSelector((state) => state.transactions.categories);
  const status = useSelector((state) => state.transactions.status);
  const error = useSelector((state) => state.transactions.error);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTransaction, setEditTransaction] = useState(null);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchTransactionCategories())
      .unwrap()
      .catch((err) => {
        toast.error(`Error fetching categories: ${err.message}`);
      });
  }, [dispatch]);

  const handleAddTransaction = (transaction) => {
    dispatch(addTransaction(transaction))
      .unwrap()
      .then(() => {
        setIsModalOpen(false);
        toast.success("Transaction added successfully!");
      })
      .catch((err) => {
        toast.error(`Error adding transaction: ${err.message}`);
      });
  };

  const handleUpdateTransaction = (transaction) => {
    dispatch(updateTransaction(transaction))
      .unwrap()
      .then(() => {
        setEditTransaction(null);
        toast.success("Transaction updated successfully!");
      })
      .catch((err) => {
        toast.error(`Error updating transaction: ${err.message}`);
      });
  };

  const handleDeleteTransaction = (transactionId) => {
    dispatch(deleteTransaction(transactionId))
      .unwrap()
      .then(() => {
        toast.success("Transaction deleted successfully!");
      })
      .catch((err) => {
        toast.error(`Error deleting transaction: ${err}`);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1>Transactions Manager</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <button onClick={() => setIsModalOpen(true)}>Add Transaction</button>
      {isModalOpen && <ModalAddTransaction closeModal={closeModal} />}
      {editTransaction && (
        <EditTransactionForm
          editTransaction={editTransaction}
          categories={categories}
          onUpdate={handleUpdateTransaction}
          onChange={(e) =>
            setEditTransaction({
              ...editTransaction,
              [e.target.name]: e.target.value,
            })
          }
          setEditTransaction={setEditTransaction}
        />
      )}
      <div className={styles.transactionList}>
        <TransactionList
          transactions={transactions}
          onEdit={(transaction) => setEditTransaction(transaction)}
          onDelete={handleDeleteTransaction}
        />
      </div>
    </div>
  );
};

export default TransactionsManager;
