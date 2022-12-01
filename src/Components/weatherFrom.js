import { useState } from "react";

import styles from '../Styles/weatherForm.module.css'

export default function WeatherFrom({ onChangeCity }) {

    const [city, setCity] = useState();

    function onChange(e) {
        const value = e.target.value;
        if (value !== '') {
            setCity(value);
        }
        else{
            setTimeout(()=>{
                setCity('Quito');
            },100)
        }

        console.log(value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (city !== '') {
            onChangeCity(city);
        }
        else {
            alert('Please enter a city')
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <input type="text" onChange={onChange} className={styles.input} placeholder="Enter a City..."/>
        </form>
    )
}