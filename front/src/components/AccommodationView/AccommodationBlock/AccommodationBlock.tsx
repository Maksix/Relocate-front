import React from 'react';
import './AccommodationBlock.less';
import OwnerInfoBlock from './OwnerInfoBlock/OwnerInfoBlock';
import SpaceBlock from './SpaceBlock/SpaceBlock';
import TitleAddressBlock from './TitleAddressBlock/TitleAddressBlock';
import CarouselBlock from './CarouselBlock/CarouselBlock';
import BenefitDescriptionBlock from './BenefitDescriptionBlock/BenefitDescriptionBlock';
import { AccommodationType } from '../../../interfaces/AccommodationTypes/AccommodationType';

type PropsType = {
  accommodation: AccommodationType
};

const AccommodationBlock = ({ accommodation }: PropsType): JSX.Element => {
  const {
    price, description, title, floor, maxFloor, roomCount, address, space, images, owner, metro, options, rules,
  } = accommodation;
  return (
    <div className="accommodation-page-block">
      <TitleAddressBlock title={title} price={price} address={address} metro={metro} />
      <CarouselBlock images={images} />
      <SpaceBlock space={space} floor={floor} maxFloor={maxFloor} roomCount={roomCount} />
      <BenefitDescriptionBlock description={description} options={options} rules={rules} />
      <OwnerInfoBlock owner={owner} />
    </div>
  );
};

export default AccommodationBlock;
