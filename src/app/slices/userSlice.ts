import { createSlice } from "@reduxjs/toolkit/";
import IUser from "../../models/user";

const initialState: IUser = {
    selected: false,
    variant: 'paper',
    wins: 0,
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUserSelected(state, action) {
            state.selected = action.payload
        },
        setUserVariant(state, action) {
            state.variant = action.payload
        },
        setUserWins(state, action) {

        }
    }
})

export const { setUserSelected, setUserVariant, setUserWins } = userSlice.actions
export default userSlice.reducer