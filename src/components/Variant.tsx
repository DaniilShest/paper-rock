import { MouseEventHandler } from 'react'
import thinkImg from '../assets/loading.svg'

interface IVariantProps {
    variant: string,
    onClick?: MouseEventHandler,
    waiting?: boolean,
    thinking?: boolean
}

export const Variant = ({ variant, onClick, waiting, thinking }: IVariantProps) => {
    if (waiting) {
        return (
            <svg className="waiting" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g>
                        <path d="M16,1C7.7157202,1,1,7.7157202,1,16s6.7157202,15,15,15s15-6.7157192,15-15S24.2842808,1,16,1z M16,27.7857151    C9.4909277,27.7857151,4.2142859,22.5090733,4.2142859,16S9.4909277,4.2142859,16,4.2142859S27.7857151,9.4909277,27.7857151,16    S22.5090733,27.7857151,16,27.7857151z" />
                    </g>
                    <g>
                        <path d="M22.5761719,22.1396484c-0.2148438,0-0.4316406-0.0693359-0.6152344-0.2119141l-6.5771484-5.1396484    C15.1416016,16.5986328,15,16.3076172,15,16V9.4228516c0-0.5522461,0.4472656-1,1-1s1,0.4477539,1,1v6.0893555    l6.1933594,4.8393555c0.4345703,0.340332,0.5117188,0.96875,0.171875,1.4038086    C23.1679688,22.0078125,22.8740234,22.1396484,22.5761719,22.1396484z" />
                    </g>
                </g>
            </svg>
        );
    }

    if (thinking) {
        return <img className="thinking" src={thinkImg} alt="thinking" />;
    }

    return (
        < img
            className="variant"
            width={180}
            src={`https://raw.githubusercontent.com/DaniilShest/paper-rock/0b15841b5815e786505b8754d8f5c2cd661194ff/public/assets/${variant}.svg`
            }
            alt="Variant"
            onClick={onClick}
        />
    );
}
