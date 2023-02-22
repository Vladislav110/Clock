import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";
import s from "./view.module.css"

type  PropsType = {
    mode?: "analog" | "digital"
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>;
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }
    return <div className={s.clocks}>
        <div className={s.view}>
            {view}
        </div>
    </div>
}

export type ViewClockType = {
    date: Date
}


