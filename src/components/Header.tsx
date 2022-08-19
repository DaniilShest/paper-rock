import React, { FC } from 'react'
import img from '../assets/refresh.svg'

export const Header: FC = () => {
    return (
        <header className='header'>
            <h3>
                <span>Вы:</span> <b>0</b>
            </h3>
            <h3>
                <img
                    className="refresh"
                    src={img}
                    alt="Refresh"
                />
                VS
            </h3>
            <h3>
                PC: <b>0</b>
            </h3>
        </header>
    )
}
