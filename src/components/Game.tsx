import React, { FC } from 'react'
import { Variant } from './Variant'
import arrow from '../assets/arrow-right.svg'

export const Game: FC = () => {
    return (
        <div className="game">
            <div className="game__user">
                <div>
                    <Variant />
                </div>
                <img
                    className="game__arrow"
                    src={arrow}
                    alt="Arrow"
                />
            </div>
            <div >
                <Variant />
            </div>
        </div>
    )
}
