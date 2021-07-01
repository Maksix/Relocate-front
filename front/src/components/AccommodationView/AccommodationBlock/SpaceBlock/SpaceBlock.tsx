import React from 'react';
import './SpaceBlock.less';

type SpaceType = {
  space: number,
  floor: number,
  maxFloor: number,
  roomCount: number
};

const SpaceBlock: React.FC<SpaceType> = ({
  space, floor, maxFloor, roomCount,
}: SpaceType) => (
  <div className="space-block">
    <div className="space-item">
      <div className="space-value">
        {`${space} м`}
        <sup>2</sup>
      </div>
      <div className="space-title">Площадь</div>
    </div>
    <div className="space-item">
      <div className="space-value">
        {`${floor} из ${maxFloor}`}
      </div>
      <div className="space-title">Этаж</div>
    </div>
    <div className="space-item">
      <div className="space-value">
        {roomCount}
      </div>
      <div className="space-title">Комнаты</div>
    </div>
  </div>
);

export default SpaceBlock;
