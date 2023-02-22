import React from "react";
import {ViewClockType} from "./UseEffect_clock";

export const DigitalClockView: React.FC<ViewClockType> = (props) => {

    const getDoubleValueTime = (number: number) => number < 10 ? "0" + number : number

    const secondString = getDoubleValueTime(props.date.getSeconds())
    const minutesString = getDoubleValueTime(props.date.getMinutes())
    const hoursString = getDoubleValueTime(props.date.getHours())

    return <>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondString}</span>
    </>;
}