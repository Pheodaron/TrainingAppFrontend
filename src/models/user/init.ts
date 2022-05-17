import { $user, getUserFx } from ".";
import { $auth } from "../auth";

$auth.watch(state => {
    if (state.token)
        // TODO: fetch user
        // getUserFx()
        console.log(state);
})

$user.on(getUserFx.doneData, (state, data) => {
    // state.firstName = data.firstname
});