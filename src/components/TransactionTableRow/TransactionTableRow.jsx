import {
  formatData,
  getTransactionCategory,
} from "../../constants/TransactionConstants";
import icons from "../../assets/images/icons/sprite.svg";
import styles from "./TransactionTableRow.module.css";
import {
  setTransactionForUpdate,
  setTransactionIdForDelete,
} from "../../redux/transactions/transactionsSlice";

import { useDispatch } from "react-redux";

const TransactionTableRow = ({
  transaction,
  openDeleteModal,
  openEditModal,
}) => {
  function formatNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  const { type, categoryId, comment, amount, transactionDate } = transaction;

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    openDeleteModal();
    dispatch(setTransactionIdForDelete(transaction.id));
  };

  const handleEditClick = () => {
    openEditModal();
    dispatch(
      setTransactionForUpdate({ id: transaction.id, type: transaction.type })
    );
  };

  let textClass = "";

  // Determine class based on data
  if (type === "INCOME") {
    textClass = styles.incomeText; // Access class from CSS module
  } else if (type === "EXPENSE") {
    textClass = styles.expenseText;
  }

  return (
    <tr className={styles.dataRow}>
      <td className={styles.TransactionDateColumn}>
        {formatData(transactionDate)}
      </td>
      <td className={styles.TransactionTypeColumn}>
        {type === "INCOME" ? "+" : "-"}
      </td>
      <td className={styles.TransactionCategoryColumn}>
        {getTransactionCategory(categoryId)}
      </td>
      <td className={styles.TransactionCommentColumn}>{comment}</td>
      <td className={`${styles.TransactionAmountColumn} ${textClass}`}>
        {type === "INCOME"
          ? formatNumberWithSpaces(amount)
          : formatNumberWithSpaces(amount * -1)}
      </td>

      <td className={styles.TransactionEditColumn}>
        <button
          className={styles.editButton}
          type="button"
          onClick={handleEditClick}
        >
          <svg className={styles.editIcon}>
            <use href={`${icons}#icon-edit`}></use>
          </svg>
        </button>
      </td>

      <td className={styles.TransactionDeleteColumn}>
        <button
          className={styles.deleteButton}
          type="button"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TransactionTableRow;
