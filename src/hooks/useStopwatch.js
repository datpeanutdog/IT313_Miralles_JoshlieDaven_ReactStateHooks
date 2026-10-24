import { useEffect, useState } from 'react';

export function useStopwatch(isRunning) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning]);

    return { seconds };
}