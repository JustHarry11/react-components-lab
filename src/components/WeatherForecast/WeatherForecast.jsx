import './WeatherForecast.css'

export default function WeatherForecast({ weatherForecasts }) {
    return (
        <>
            {weatherForecasts.map((item, index) => {
                return (
                    <div key={index} className="weather">
                        <h2>{item.day}</h2>
                        <img src={item.img} alt={item.imgAlt} />
                        <p><span>conditions: </span>{item.conditions} </p>
                        <p><span>time: </span>{item.time}</p>
                    </div>
                )
            })}
        </>


    )
}

