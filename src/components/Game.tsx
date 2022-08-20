import React, { FC } from 'react'
import { Variant } from './Variant'
import arrow from '../assets/arrow-right.svg'
import IVariant from '../models/variant';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setUserSelected, setUserVariant } from '../app/slices/userSlice';
import { setBotSelected, setBotThinking, setBotVariant, setBotWaiting } from '../app/slices/botSlice';

export const Game: FC = () => {

    const variants: IVariant[] = [
        {
            name: 'paper',
            beat: 'rock',
        },
        {
            name: 'rock',
            beat: 'scissors',
        },
        {
            name: 'scissors',
            beat: 'paper',
        },
    ];

    const dispatch = useAppDispatch()

    const user = useAppSelector(state => state.user)
    const bot = useAppSelector(state => state.bot)

    const onClickVariant = (): void => {
        const arr = variants.map((e) => e.name)
        const index = arr.findIndex(item => item === user.variant)
        const activeVariant = arr[(index + 1) % 3]
        dispatch(setUserVariant(activeVariant))
    }

    const onClickArrow = (): void => {
        dispatch(setUserSelected(true))

        dispatch(setBotSelected(true))
        dispatch(setBotWaiting(false))
        dispatch(setBotThinking(true))

        setTimeout(() => {
            dispatch(setBotVariant(variants[Math.floor(Math.random() * 3)].name))
            dispatch(setBotThinking(false))
        }, 1000)
    }

    const checkWhoWin = (): void => {
        if (user.variant === bot.variant) {
            console.log("ничья")
        }
    }

    return (
        <div className="game">
            <div className="game__user">
                <div className={user.selected ? 'userSelect' : ''}>
                    <Variant onClick={onClickVariant} variant={user.variant} />
                </div>
                {!user.selected && (
                    <img
                        onClick={onClickArrow}
                        className="game__arrow"
                        src={arrow}
                        alt="Arrow"
                    />
                )}
            </div>
            <div className={bot.selected ? 'botSelect' : ''}>
                <Variant waiting={bot.waiting} thinking={bot.thinking} variant={bot.variant} />
            </div>
        </div>
    )
}
