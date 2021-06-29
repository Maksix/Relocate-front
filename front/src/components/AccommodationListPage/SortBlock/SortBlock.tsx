import React from 'react';
import './SortBlock.less';
import { Radio } from 'antd';

const options = [
  { label: 'По дате добавления', value: 'created' },
  { label: 'По цене', value: 'price' },
  { label: 'По площади', value: 'space' },
];

const SortBlock: React.FC = () => (
  <div className="sort-block">
    <Radio.Group options={options} optionType="button" />
  </div>
);

export default SortBlock;
