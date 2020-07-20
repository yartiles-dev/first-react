import {createSelector} from "reselect";
import {User} from "../../App";

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    ({currentUser}: {currentUser: User} ) => currentUser
)