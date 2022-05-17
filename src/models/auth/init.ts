import { $auth, loginFx } from '.';

$auth.on(loginFx.doneData, (state, token) => {
  state.isAuthenticated = true;
  state.isLoading = false;
  state.token = token;
});
