import React, { useState } from 'react';
import './OwnerInfoBlock.less';
import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type OwnerType = {
  owner: {
    name: string,
    phoneNumber: string,
  },
};

const OwnerInfoBlock: React.FC<OwnerType> = ({ owner }: OwnerType) => {
  const { name, phoneNumber } = owner;
  const [isShowNumber, setIsShowNumber] = useState(false);
  const setShowNumber = () => setIsShowNumber(true);
  return (
    <div className="owner-block">
      <div className="block-title">
        Арендодатель
      </div>
      <div className="name-block">
        <div className="letter-box">
          <div className="letter">
            {name[0]}
          </div>
        </div>
        <div className="name-box">
          <div className="name">
            {name}
          </div>
          <div className="icon">
            <CheckOutlined style={{ color: '#78BA4D' }} />
          </div>
        </div>
      </div>
      <div className="phone-block">
        <Button onClick={() => setShowNumber()}>
          {isShowNumber ? phoneNumber : 'Показать телефон'}
        </Button>
      </div>
    </div>
  );
};

export default OwnerInfoBlock;
