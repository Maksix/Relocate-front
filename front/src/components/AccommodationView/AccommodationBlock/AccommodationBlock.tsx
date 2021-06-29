import React from 'react';
import './AccommodationBlock.less';
import { Badge, Carousel, Image } from 'antd';
import _ from 'lodash';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';

type AccommodationType = {
  accommodation: {
    id: number,
    price: number,
    description: string,
    title: string,
    floor: number,
    maxFloor: number,
    roomCount: number,
    address: string,
    space: number,
    metro: {
      name: string,
      color: string,
      transportTime: number,
      transportType: string,
    }[]
    images:{ src: string }[]
    owner: {
      name: string,
      phoneNumber: string,
    }
  };
};

// const NextArrow = ({currentSlide, slideCount, ...props}: CustomArrowProps) => (
//   <div {...props}>
//     <i className="fas fa-arrow-circle-right"></i>
//   </div>
// );

const AccommodationBlock: React.FC<AccommodationType> = ({ accommodation }: AccommodationType) => {
  const {
    id, price, description, title, floor, maxFloor, roomCount, address, space, images, owner, metro,
  } = accommodation;
  return (
    <div className="accommodation-view">
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
      <div className="image-block">
        <Carousel arrows dotPosition="top" nextArrow={<CaretRightOutlined />} prevArrow={<CaretLeftOutlined />}>
          {images.map((image) => (
            <div key={image.src}>
              <Image height={650} key={image.src} src={image.src} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AccommodationBlock;
