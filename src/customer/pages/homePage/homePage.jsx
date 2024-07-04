import React from 'react';
import MainCarousel from '../../components/homeCarousel/mainCarousel';
import HomeSectionCarousel from '../../components/homeSectionCarousel/homeSectionCarousel';
import { mensKurta } from '../../../data/mensKurta';


const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-0 lg:px-10'>
        <div className="mt-10"> {/* Add margin-top to move the carousel and arrow buttons away from the top */}
          <HomeSectionCarousel data={mensKurta} sectionName={"Men's Kurta"}/>
          <HomeSectionCarousel data={mensKurta} sectionName={"Men's Shoes"}/>
          <HomeSectionCarousel data={mensKurta} sectionName={"Men's Shirt"}/>
          <HomeSectionCarousel data={mensKurta} sectionName={"Women's Saree"}/>
          <HomeSectionCarousel data={mensKurta} sectionName={"Women's Dress"}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
