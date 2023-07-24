'use client'
import React, { useEffect, useState } from 'react'
import style from '../../styles/Counter.module.css'
const Counter = () => {
    let [clockData, setClockData] = useState({
        dd: 0,
        hh: 0,
        mm: 0,
        ss: 0
    });

    useEffect(() => {
        const sec = 1000,
            min = sec * 60,
            hour = min * 60,
            day = hour * 24;

        let clockInterval = setInterval(() => {
            const end = new Date("Dec 05, 2023 12:00:00").getTime();
            const current = new Date().getTime();
            const remaining = end - current;

            if (remaining <= 0) {
                clearInterval(clockInterval);
                return;
            }

            let dd = Math.floor(remaining / day);
            let hh = Math.floor((remaining % day) / hour);
            let mm = Math.floor((remaining % hour) / min);
            let ss = Math.floor((remaining % min) / sec);

            setClockData(previous => {
                return { ...previous, dd, hh, mm, ss };
            });
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        }
    }, []);
    return (
        <section className={style.conter}>
        <div className={style.counter_clock}>
            <h4 className={style.counter_title}>Flash Deal</h4>
            <div className={style.coundown}>
                <div className={style.timer}>{clockData.dd}<span className={style.unite}>Day</span></div>
                <div className={style.timer}>{clockData.hh}<span className={style.unite}>Hrs</span></div>
                <div className={style.timer}>{clockData.mm}<span className={style.unite}>Min</span></div>
                <div className={style.timer}>{clockData.ss}<span className={style.unite}>Sec</span></div>
            </div>
        </div>
</section>
    )
}

export default Counter