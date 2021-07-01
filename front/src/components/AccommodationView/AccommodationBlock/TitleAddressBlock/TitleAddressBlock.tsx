import React from 'react';
import './TitleAddressBlock.less';
import { Badge } from 'antd';
import _ from 'lodash';

type TitleAddressBlockType = {
  title: string,
  price: number,
  address: string,
  metro: {
    name: string,
    color: string,
    transportTime: number,
    transportType: string,
  }[]
};

const TitleAddressBlock: React.FC<TitleAddressBlockType> = ({
  title, price, address, metro,
}: TitleAddressBlockType) => (
  <>
    <div className="title-block">
      <div>
        {title}
      </div>
      <div>
        <span className="price">
          {price.toLocaleString()}
        </span>
        ₽/мес
      </div>
    </div>
    <div className="address">
      {address}
    </div>
    <div className="metro-block">
      {metro.map((metroItem) => (
        <div className="metro-item" key={metroItem.name}>
          <Badge
            color={metroItem.color}
            text={(
              <span>
                {metroItem.name}
                <span className="transport-time">
                  {` (${metroItem.transportTime} минут ${_.lowerFirst(metroItem.transportType)})`}
                </span>
              </span>
            )}
          />
        </div>
      ))}
    </div>
  </>
);

export default TitleAddressBlock;
