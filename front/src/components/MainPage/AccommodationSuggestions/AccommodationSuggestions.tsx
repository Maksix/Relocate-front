import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import AccommodationList from '../../../common/Accommodation/AccommodationList/AccommodationList';
import './AccommodationSuggestions.less';

const AccommodationSuggestions: React.FC = () => (
  <div className="suggestion-box">
    <div className="suggestion-title">
      Последние предложения
    </div>
    <AccommodationList />
    <div className="suggestion-link">
      <Button>
        <Link to="/accommodation">
          Смотреть все предложения
        </Link>
      </Button>
    </div>
  </div>
);

export default AccommodationSuggestions;
