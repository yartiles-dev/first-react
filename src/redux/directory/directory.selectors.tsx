import {createSelector} from "reselect";
import {Directory} from "./directory.reducer";

const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
    [selectDirectory],
    ({sections}: {sections: Directory[]} ) => sections
)