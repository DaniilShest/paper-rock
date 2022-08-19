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

        },
        setUserVariant(state, action) {

        },
        setUserWins(state, action) {

        }
    }
})

export const { } = userSlice.actions
export default userSlice.reducer