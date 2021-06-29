import React from 'react';
import './MetroDistance.less';
import { Radio, Select } from 'antd';

const { Option } = Select;

const timeOptions = [
  {
    value: '<5',
  },
  {
    value: '<10',
  },
  {
    value: '<15',
  },
  {
    value: '<20',
  },
];

const distanceTypeOptions = [
  {
    name: 'Неважно',
  },
  {
    name: 'Пешком',
  },
  {
    name: 'Транспортом',
  },
];

const MetroDistance: React.FC = () => (
  <div>
    <div className="metro-distance-title">
      Расстояние до метро, мин.
    </div>
    <Select
      size="large"
      defaultValue={distanceTypeOptions[0].name}
    >
      {distanceTypeOptions.map((type) => (
        <Option value={type.name} key={type.name}>
          {type.name}
        </Option>
      ))}
    </Select>
    <div className="metro-time-block">
      <Radio.Group>
        {timeOptions.map((time) => (
          <Radio.Button key={time.value} value={time.value}>
            {time.value}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  </div>
);

export default MetroDistance;
