import { createSlice } from "@reduxjs/toolkit/";
import IBot from "../../models/bot";
import IUser from "../../models/user";

const initialState: IBot = {
    thinking: false,
    waiting: true,
    variant: 'paper',
    wins: 0,
}

const botSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        setBotThinking(state, action) {

        },
        setBotWaiting(state, action) {

        },
        setBotVariant(state, action) {

        },
        setUserWins(state, action) {

        }
    }
})

export const { } = botSlice.actions
export default botSlice.reducer