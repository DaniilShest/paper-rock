import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { setBotWins } from './app/slices/botSlice';
import { setUserWins } from './app/slices/userSlice';
import { Game } from './components/Game';
import { Header } from './components/Header';
import { variants } from './data/variants';
import './index.scss';
export default function App() {

  const dispatch = useAppDispatch()

  const user = useAppSelector(state => state.user)
  const bot = useAppSelector(state => state.bot)

  const checkWhoWin = (): void => {
    console.log(user.variant)
    console.log(bot.variant)
    if (user.variant === bot.variant) {
      return
    }

    const obj = variants.find((e) => e.name === user.variant)
    bot.variant === obj?.beat ? dispatch(setUserWins(user.wins + 1)) : dispatch(setBotWins(bot.wins + 1))
  }

  React.useEffect(() => {
    if (bot.selected && user.selected) {
      checkWhoWin()
    }
  }, [bot.selected, user.selected])

  return (
    <div className='App'>
      <Header />
      <Game />
    </div>
  )
}


