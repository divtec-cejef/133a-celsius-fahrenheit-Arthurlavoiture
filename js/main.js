/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */


'use strict'; // Demande un interprétation stricte du code

let temperatureEnCelcius = prompt('Temperature en Celcius');//

let temperaturEnFahrenheit = temperatureEnCelcius * 9 / 5 + 32;

temperatureEnCelcius = parseInt(temperatureEnCelcius);

if (isNaN(temperatureEnCelcius)){
    alert('veuillez saisire un nomre');
} else {

    alert(`${temperatureEnCelcius}°C = ${temperaturEnFahrenheit}°F`)

}



