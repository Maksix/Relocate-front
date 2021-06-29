import React from 'react';
import './RoomSelect.less';
import { Radio } from 'antd';

const roomOptions = [
  {
    value: 'Комната',
  },
  {
    value: '1',
  },
  {
    value: '2',
  },
  {
    value: '3',
  },
  {
    value: '4+',
  },
];

const RoomSelect: React.FC = () => (
  <Radio.Group>
    {roomOptions.map((room) => (
      <Radio.Button key={room.value} value={room.value}>
        {room.value}
      </Radio.Button>
    ))}
  </Radio.Group>
);

export default RoomSelect;
