import React from 'react';
import './SearchZone.less';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import MetroSelect from '../../../common/Filters/MetroSelect/MetroSelect';
import RoomSelect from '../../../common/Filters/RoomSelect/RoomSelect';
import PriceSelect from '../../../common/Filters/PriceSelect/PriceSelect';

const SearchZone: React.FC = () => (
  <div className="search-zone">
    <div className="title">
      Найди квартиру мечты в Москве с Relocate
    </div>
    <div className="search-body">
      <div className="metro-select">
        <MetroSelect />
      </div>
      <div className="room-select">
        <RoomSelect />
      </div>
      <div className="price-select">
        <PriceSelect />
      </div>
      <Button>
        <Link to="/accommodation">
          Найти
        </Link>
      </Button>
    </div>
  </div>
);

export default SearchZone;
