import { useEffect, useState } from "react"

const Bai2 = () => {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString())
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [])

    return (
        <div>
            <a href="">{time}</a>
        </div>
    )
}



export default Bai2