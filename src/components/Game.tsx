import { FC } from 'react'
import { Variant } from './Variant'
import arrow from '../assets/arrow-right.svg'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setUserSelected, setUserVariant } from '../app/slices/userSlice';
import { setBotSelected, setBotThinking, setBotVariant, setBotWaiting } from '../app/slices/botSlice';
import { variants } from '../data/variants';

export const Game: FC = () => {

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
        dispatch(setBotWaiting(false))
        dispatch(setBotThinking(true))

        setTimeout(() => {
            dispatch(setBotSelected(true))
            dispatch(setBotThinking(false))
            dispatch(setBotVariant(variants[Math.floor(Math.random() * 3)].name))
        }, 1000)
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
