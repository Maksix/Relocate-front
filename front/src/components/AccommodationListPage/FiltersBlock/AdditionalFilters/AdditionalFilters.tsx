import React from 'react';
import './AdditionalFilters.less';
import { Collapse, Checkbox, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { AccommodationOptionsLabelType } from '../../../../interfaces/AccommodationTypes/OptionsType';
import { RulesAccommodationOptionsType } from '../../../../interfaces/AccommodationTypes/RulesType';

const { Panel } = Collapse;

export const accommodationRules: RulesAccommodationOptionsType = [
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
];

export const accommodationOptions: AccommodationOptionsLabelType = [
  {
    value: 'rentTerm',
    label: 'Длительность аренды',
    options: [
      {
        value: 'short',
        label: 'краткосрочная (до 3-х мес)',
      },
      {
        value: 'long',
        label: 'долгосрочная',
      },
    ],
  },
  {
    value: 'wcType',
    label: 'Сан. узел',
    options: [
      {
        value: 'combined',
        label: 'совмещенный',
      },
      {
        value: 'separated',
        label: 'раздельный',
      },
    ],
  },
  {
    value: 'bathType',
    label: 'Тип ванной',
    options: [
      {
        value: 'bath',
        label: 'ванная',
      },
      {
        value: 'shower',
        label: 'душ',
      },
    ],
  },
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
        {accommodationRules.map((rule) => (
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
