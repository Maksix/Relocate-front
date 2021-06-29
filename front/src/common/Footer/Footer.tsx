import React from 'react';
import './Footer.less';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="row">
      <div className="cell">Relocate</div>
      <div className="cell">Арендаторам</div>
      <div className="cell">Владельцам</div>
    </div>
    <div className="row">
      <div className="cell">
        <Link to="/about">
          О нас
        </Link>
      </div>
      <div className="cell">
        <Link to="/about">
          Найти квартиру
        </Link>
      </div>
      <div className="cell">
        <Link to="/about">
          Сдать квартиру
        </Link>
      </div>
    </div>
    <div className="description">
      Данный сайт является учебным проектом.
      Данные, размещенные на нем, не соответствуют действительности и сгенерированы автоматически
    </div>
  </footer>
);

export default Footer;
