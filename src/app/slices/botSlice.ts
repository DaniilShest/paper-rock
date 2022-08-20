import { createSlice } from "@reduxjs/toolkit/";
import IBot from "../../models/bot";

const initialState: IBot = {
    thinking: false,
    waiting: true,
    variant: 'rock',
    selected: false,
    wins: 0,
}

const botSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        setBotThinking(state, action) {
            state.thinking = action.payload
        },
        setBotWaiting(state, action) {
            state.waiting = action.payload
        },
        setBotVariant(state, action) {
            state.variant = action.payload
        },
        setBotSelected(state, action) {
            state.selected = action.payload
        },
        setBotWins(state, action) {
            state.wins = action.payload
        }
    }
})

export const { setBotThinking, setBotWaiting, setBotVariant, setBotSelected, setBotWins } = botSlice.actions
export default botSlice.reducer