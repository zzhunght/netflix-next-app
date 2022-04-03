import Image from 'next/image'
import React from 'react'

function Hero({data,backdrop}) {
  return (
    <div
     className="hero-wr" 
     style={{backgroundImage:`url(${backdrop ? backdrop : `https://image.tmdb.org/t/p/w500${data.backdrop_path}`})`}} 
    >
        <div className="hero-ct">
            <div className="hero-movie-name">
                {data.original_title}
            </div>
            <div className="hero-btn">
                <button className="btn-hero-play">Play</button>
                <button className="btn-hero-info">More Info</button>
            </div>
            <div className="hero-movie-des">
                <p>{data.overview}</p>
            </div>
            
        </div>
    </div>
  )
}

export default Hero