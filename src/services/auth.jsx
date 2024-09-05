export const selectAuthToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
