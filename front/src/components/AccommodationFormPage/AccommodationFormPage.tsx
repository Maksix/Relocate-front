import React from 'react';
import IPage from '../../interfaces/IPage';
import './AccommodationFormPage.less';
import AccommodationForm from './AccommodationForm/AccommodationForm';

const AccommodationFormPage: React.FC<IPage> = () => (
  <div className="form-block">
    <AccommodationForm />
  </div>
);

export default AccommodationFormPage;
