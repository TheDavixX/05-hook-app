import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 });
    const { x, y } = coords;

    useEffect(() => {

        const mouseMove = (event) => {
            const cords = { x: event.x, y: event.y };
            setCoords(cords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);


    return (
        <div>
            <p> x:{ x } y:{ y } </p>
        </div>
    )
}
