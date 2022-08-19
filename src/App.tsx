import React from 'react';
import { Game } from './components/Game';
import { Header } from './components/Header';
import './index.scss';
export default function App() {
  return (
    <div className='App'>
      <Header />
      <Game />
    </div>
  )
}


