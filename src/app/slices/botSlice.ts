import { createSlice, PayloadAction } from "@reduxjs/toolkit/";
import IBot from "../../models/bot";
import IVariant from "../../models/variant";

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
        setBotThinking(state, action: PayloadAction<boolean>) {
            state.thinking = action.payload
        },
        setBotWaiting(state, action: PayloadAction<boolean>) {
            state.waiting = action.payload
        },
        setBotVariant(state, action: PayloadAction<"paper" | "rock" | "scissors">) {
            state.variant = action.payload
        },
        setBotSelected(state, action: PayloadAction<boolean>) {
            state.selected = action.payload
        },
        setBotWins(state, action: PayloadAction<number>) {
            state.wins = action.payload
        }
    }
})

export const { setBotThinking, setBotWaiting, setBotVariant, setBotSelected, setBotWins } = botSlice.actions
export default botSlice.reducer