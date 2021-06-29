import React from 'react';
import { Radio } from 'antd';
import './MapToggleBlock.less';

const options = [
  { label: 'Списком', value: 'list' },
  { label: 'На карте', value: 'map' },
];

const MapToggleBlock: React.FC = () => (
  <div className="toggle-map-block">
    <Radio.Group options={options} optionType="button" />
  </div>
);

export default MapToggleBlock;
