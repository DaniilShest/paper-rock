import React, { FC } from 'react'
import paper from '../assets/paper.svg'
import rock from '../assets/rock.svg'
import scissors from '../assets/scissors.svg'
import IVariant from '../models/variant'


export const Variant: FC = () => {

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

    const onClickVariant = (variant: string): void => {
    }



    return (
        <img
            className="variant"
            width={180}
            src={require('../../public/assets/paper.svg')}
            alt="Variant"
        />
    );
}
