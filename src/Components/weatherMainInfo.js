import { useEffect, useState } from 'react';
import styles from '../Styles/weatherMainInfo.module.css';

export default function WeatherMainInfo({ weather }) {

    const [images, setImages] = useState([]);

    const fetchImages = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos/?query=${weather?.location.name}&client_id=lgUPHcZOmyCMrUKvMzWmzGP17aAESKecsw08-OoAcIM`)
        const data = await response.json();
        const resp = data.results[0].urls.full
        setImages(resp)
    }
    fetchImages();
    console.log(images)

    return (

        <div >
            <div className={styles.cards} >
                <div className={styles.mainInfo}>
                    <img src={images} alt="imgs" className={styles.home} />
                    <div className={styles.content}>
                        <div className={styles.imgweather}>
                            <img src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.icon} width="128" />
                        </div>
                        <div className={styles.city}>
                            {weather?.location.name}
                        </div>
                        <div className={styles.country}>{weather?.location.country}</div>
                        <div className={styles.row}>

                            <div className={styles.weatherConditions}>
                                <div className={styles.current}>
                                    {weather?.current.temp_c}°
                                </div>
                                <div className={styles.condition}>
                                    {weather?.current.condition.text}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.map}>
                    <iframe
                        title="mapa"

                        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d303660.83035371645!2d${weather.location.lon}!3d${weather.location.lat}12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1669848352782!5m2!1ses-419!2sec" width="600" height="450`}
                        style={{ border: 0, height: 520, width: 430, borderRadius: 30 }}
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

        </div>
    )
}