import { useEffect, useState } from "react"
import WeatherFrom from "./weatherFrom";
import WeatherMainInfo from "./weatherMainInfo";

import styles from '../Styles/weatherApp.module.css'
import Loading from "./loading";
import ErrorPage from "./errorPage";

export default function WeatherApp() {

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        loadInfo();
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`;
    }, [weather])

    let request, json;
    async function loadInfo(city = 'Ecuador') {
        try {
            request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            json = await request.json();
            setTimeout(() => {
                setWeather(json);
            }, 2000)

            if (request.status !== 200) throw json;
            return json;

        } catch (e) {
            setError(e)
            setTimeout(() => {
                window.location.reload();
            }, 2000)
            
        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className={styles.weatherContainer} >
            {error ?
                (
                    <span className={styles.spantext}>
                        <ErrorPage/>
                    </span>
                )
                :
                (
                    <>
                        <div className={styles.weatherText}>
                            <h1>Weather App</h1>
                        </div>
                        <WeatherFrom onChangeCity={handleChangeCity} />
                        {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
                    </>
                )}
        </div>
    )
}
