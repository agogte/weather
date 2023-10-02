import React from 'react'
import './CurrentWeather.css'

const CurrentWeather = () => {
  return (
    <div className="weather">
        <div className="top">
            <div>
            <p className='city'>Mumbai</p>
            <p className='weather-description'>Sunny</p>
            </div>   
            <img src="icons/01d.png" alt="weather" className='weather-icon' />
        </div>
        <div className="bottom">
            <p className="temperature">86°F</p>
            <div className="details">
                {/* <div className="parameter-row">
                    <span className="parameter-label top">Details</span>
                </div> */}
                <div className="parameter-row">
                    <span className="parameter-label">Feels Like</span>
                    <span className="parameter-value">90°F</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Wind</span>
                    <span className="parameter-value">2 mph</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Humidity</span>
                    <span className="parameter-value">70%</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Pressure</span>
                    <span className="parameter-value">1015Pa</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather