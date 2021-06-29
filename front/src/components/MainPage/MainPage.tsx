import React from 'react';
import IPage from '../../interfaces/IPage';
import BenefitList from './BenefitList/BenefitList';
import './MainPage.less';
import AccommodationSuggestions from './AccommodationSuggestions/AccommodationSuggestions';
import SearchZone from './SearchZone/SearchZone';

const MainPage: React.FC<IPage> = () => (
  <div className="main">
    <SearchZone />
    <BenefitList />
    <AccommodationSuggestions />
  </div>
);

export default MainPage;
