import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setBotSelected, setBotWaiting } from '../app/slices/botSlice'
import { setUserSelected } from '../app/slices/userSlice'
import img from '../assets/refresh.svg'

export const Header = () => {

    const dispatch = useAppDispatch()

    const user = useAppSelector(state => state.user)
    const bot = useAppSelector(state => state.bot)

    const onClickRefresh = (): void => {
        dispatch(setUserSelected(false))
        dispatch(setBotSelected(false))
        dispatch(setBotWaiting(true))
    }

    return (
        <header className='header'>
            <h3>
                <span>Вы:</span> <b>{user.wins}</b>
            </h3>
            <h3>
                <img
                    className="refresh"
                    src={img}
                    alt="Refresh"
                    onClick={onClickRefresh}
                />
                VS
            </h3>
            <h3>
                PC: <b>{bot.wins}</b>
            </h3>
        </header>
    )
}
