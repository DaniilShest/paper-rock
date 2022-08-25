import { createSlice, PayloadAction } from "@reduxjs/toolkit/";
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
        setUserSelected(state, action: PayloadAction<boolean>) {
            state.selected = action.payload
        },
        setUserVariant(state, action: PayloadAction<"paper" | "rock" | "scissors">) {
            state.variant = action.payload
        },
        setUserWins(state, action: PayloadAction<number>) {
            state.wins = action.payload
        }
    }
})

export const { setUserSelected, setUserVariant, setUserWins } = userSlice.actions
export default userSlice.reducer