import React from 'react';
import './MetroSelect.less';
import { Badge, Select } from 'antd';

const { Option } = Select;

type MetroSelectType = {
  mode?: 'multiple' | 'tags' | undefined
};

const metroArr = [
  {
    name: 'Авиамоторная',
    color: '#ffc61a',
  },
  {
    name: 'Улица Академика Янгеля',
    color: '#a1a2a3',
  },
  {
    name: 'Университет',
    color: '#da2128',
  },
  {
    name: 'Рассказовка',
    color: '#ffc61a',
  },
  {
    name: 'Багратионовская',
    color: '#0078bf',
  },
];

const MetroSelect: React.FC<MetroSelectType> = ({ mode }: MetroSelectType) => (
  <Select
    size="large"
    mode={mode}
    allowClear
    showSearch
    placeholder="Метро"
  >
    {metroArr.map((metro) => (
      <Option value={metro.name} key={metro.name}>
        <Badge color={metro.color} text={metro.name} />
      </Option>
    ))}
  </Select>
);

MetroSelect.defaultProps = {
  mode: undefined,
};

export default MetroSelect;
