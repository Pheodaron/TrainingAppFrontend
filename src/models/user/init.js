import { $user } from ".";
import { $token } from "../auth";

$user.watch($token, token => {
    console.log(token);
})

// $user.on(getUserFx.doneData, (state, data) => {
//     state.firstName = data.firstName;
//     state.lastName = data.lastName;
// });