// import styles from "./ModalAddTransaction.module.css";
import { AddTransactionForm } from "../TransactionForm/TransactionForm";
import TransactionModal from "../TransactionModal/TransactionModal";

const ModalAddTransaction = ({ closeModal }) => {
  return (
    <TransactionModal closeModal={closeModal}>
      <AddTransactionForm closeModal={closeModal} />
    </TransactionModal>
  );
};

export default ModalAddTransaction;
