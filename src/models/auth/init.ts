import { $auth, loadStorageFx, setToken } from "./index";

$auth.on(loadStorageFx.doneData, (state, token) => {
    state.token = token;
    state.isLoading = false;
    if (token)
        state.isAuthorised = true;
})

$auth.on(setToken, (state, token) => {
    state.token = token;
    if (token)
        state.isAuthorised = true;
});