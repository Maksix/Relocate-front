import React from 'react';
import './PriceSelect.less';
import { Collapse, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const PriceSelect: React.FC = () => (
  <Collapse
    expandIcon={({ isActive }) => <DownOutlined style={{ color: '#bfbfbf' }} rotate={isActive ? 180 : 0} />}
    expandIconPosition="right"
  >
    <Panel key="1" header="Цена">
      <Input.Group>
        <Input placeholder="от 7000" />
        <Input placeholder="до" />
      </Input.Group>
    </Panel>
  </Collapse>
);

export default PriceSelect;
