export default interface IBot {
    thinking: boolean,
    waiting: boolean,
    variant: "paper" | "rock" | "scissors",
    selected: boolean,
    wins: number
}