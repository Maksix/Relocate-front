import React from 'react';
import './AdditionalFilters.less';
import { Collapse, Checkbox, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const rulesOfAccommodation = [
  {
    value: 'isAllowedPets',
    label: 'Можно с животными',
  },
  {
    value: 'isAllowedSmoking',
    label: 'Можно курить',
  },
  {
    value: 'isAllowedChildren',
    label: 'Можно с детьми',
  },
  {
    value: 'isAllowedParties',
    label: 'Подходит для мероприятий',
  },
];

const accommodationOptions = [
  {
    value: 'balcony',
    label: 'Балкон',
  },
  {
    value: 'elevator',
    label: 'Лифт',
  },
  {
    value: 'conditioner',
    label: 'Кондиционер',
  },
  {
    value: 'fridge',
    label: 'Холодильник',
  },
  {
    value: 'dishWasher',
    label: 'Посудомойка',
  },
  {
    value: 'laundry',
    label: 'Стиральная машина',
  },
  {
    value: 'internet',
    label: 'Интернет',
  },
  {
    value: 'tv',
    label: 'Телевизор',
  },
];
const AdditionalFilters: React.FC = () => (
  <Collapse
    expandIcon={({ isActive }) => <DownOutlined style={{ color: '#bfbfbf' }} rotate={isActive ? 180 : 0} />}
    expandIconPosition="right"
  >
    <Panel key="1" header="Дополнительно">
      <div className="filter-subBlock space-block">
        <div className="input-block">
          <div className="filter-title">
            Площадь, м
            <sup>2</sup>
          </div>
          <Input.Group>
            <Input />
            <div className="divider">
              -
            </div>
            <Input />
          </Input.Group>
        </div>
        <div className="input-block">
          <div className="filter-title">
            Этаж
          </div>
          <Input.Group>
            <Input />
            <div className="divider">
              /
            </div>
            <Input />
          </Input.Group>
        </div>
      </div>
      <div className="filter-subBlock">
        <div className="filter-title">
          Удобства
        </div>
        {accommodationOptions.map((rule) => (
          <div key={rule.value} className="checkbox-block">
            <Checkbox>
              {rule.label}
            </Checkbox>
          </div>
        ))}
      </div>
      <div className="filter-subBlock">
        <div className="filter-title">
          Особенности
        </div>
        {rulesOfAccommodation.map((rule) => (
          <div key={rule.value} className="checkbox-block">
            <Checkbox>
              {rule.label}
            </Checkbox>
          </div>
        ))}
      </div>
    </Panel>
  </Collapse>
);

export default AdditionalFilters;
