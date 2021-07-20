import React from 'react'
import Slider from 'react-slick'

//import components
import Poster from '../Poster/poster.component'
import PosterCarousalSettings from '../../config/PosterCarousal.config';
import PremierImages from '../../config/TempPosters.config';



export const Premier= () => {
    return (
      <>
      <div className="flex flex-col items-start">
        <h1 className="text-white text-xl font-bold">Premieres</h1>
        <p className="text-white text-sm">Brand new releases every Friday</p>
      </div>
        <Slider {...PosterCarousalSettings}>
          {PremierImages.map((image) => (
            <Poster {...image} isDark/>
          ))}
        </Slider>
      </>
    );
  };
  
  export default Premier;