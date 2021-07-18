import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import IPage from '../../interfaces/IPage';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import FiltersBlock from './FiltersBlock/FiltersBlock';
import './AccommodationListPage.less';
import AccommodationList from '../../common/Accommodation/AccommodationList/AccommodationList';
import SortBlock from './SortBlock/SortBlock';
import MapToggleBlock from './MapToggleBlock/MapToggleBlock';

const AccommodationListPage: React.FC<IPage> = () => {
  const breadcrumbs = [{ text: 'Главная', link: '/' }, { text: 'Поиск' }];
  const [visible, setVisible] = useState(false);

  return (
    <div className="list-page">
      <div className="list-header">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="filter-button">
          <Button onClick={() => setVisible(true)}>
            Фильтры
          </Button>
        </div>
        <Modal
          visible={visible}
          centered
          width={400}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
          <FiltersBlock />
        </Modal>
        <SortBlock />
      </div>
      <div className="list-body">
        <div className="filter-menu-block">
          <MapToggleBlock />
          <FiltersBlock />
        </div>
        <AccommodationList />
      </div>
    </div>
  );
};

export default AccommodationListPage;
