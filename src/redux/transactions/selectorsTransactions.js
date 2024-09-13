export const selectTransactionCategories = (state) =>
  state.transactions.categories;
export const selectTransactions = (state) => state.transactions.items;
export const selectIsLoading = (state) => state.transactions.isLoading;
export const selectError = (state) => state.transactions.error;
export const selectTransactionForUpdate = (state) =>
  state.transactions.transactionForUpdate;

export const selectTransactionSummary = (state) => state.transactions.summary;
export const selectTransactionIdForDelete = (state) =>
  state.transactions.trasactionIdForDelete;
