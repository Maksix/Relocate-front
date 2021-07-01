import React from 'react';
import './CarouselBlock.less';
import { Carousel, Image } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

type CarouselBlockType = {
  images:{ src: string }[]
};

const CarouselBlock: React.FC<CarouselBlockType> = ({ images }: CarouselBlockType) => (
  <div className="image-block">
    <Carousel arrows dotPosition="top" nextArrow={<CaretRightOutlined />} prevArrow={<CaretLeftOutlined />}>
      {images.map((image) => (
        <div key={image.src}>
          <Image height={500} key={image.src} src={image.src} />
        </div>
      ))}
    </Carousel>
  </div>
);

export default CarouselBlock;
