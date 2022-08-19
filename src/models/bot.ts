export default interface IBot {
    thinking: boolean,
    waiting: boolean,
    variant: "paper" | "rock" | "scissors",
    wins: number
}